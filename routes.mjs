import {resolve} from 'path';
import db from './models/index.mjs';

import initRoomsController from './controllers/rooms.mjs';
import initUsersController from './controllers/users.mjs';
import initMessagesController from './controllers/messages.mjs';
import cookie from 'cookie';

import {
  convertUserIdToHash,
  // authenticateUserCookies,
} from './utils/authRelated.mjs';

export default function bindRoutes(app, io) {
  console.log('inside bind routes');
  // ====
  const UsersController = initUsersController(db);
  // ====
  const RoomsController = initRoomsController(db);
  // ====
  const MessagesController = initMessagesController(db);

  // Middleware that checks if a user is authenticated
  // app.use(async (req, res, next, db) => {
  //   console.log(`req is:`);
  //   console.log(req);
  //   await authenticateUserCookies(req, res, next, db);
  //   next();
  // });
  app.use(async (req, res, next) => {
    req.isUserLoggedIn = false;

    // destructure cookies from client browser
    const {loggedInUserId, loggedInHash} = req.cookies;

    // check if loggedInUserId has been set as a cookie
    if (loggedInUserId && loggedInHash) {
      // combine the loggedInUserId with a salt, then hash the string
      const hash = convertUserIdToHash(loggedInUserId);

      if (loggedInHash === hash) {
        // Double check by finding this user in the database
        const userInstance = await db.User.findById(loggedInUserId);
        // If there isn't such a user, send a forbiden status
        if (!userInstance) {
          console.log('no such userInstance');
          res.status(503).send('no such user instance');
          return;
        }
        // else, the user's credentials check out, set isUserLoggedIn to true
        req.isUserLoggedIn = true;
        // set the userId as a key in the request object so that it's accessible in the route
        req.loggedInUserId = userInstance._id;
        req.loggedInUsername = userInstance.username;
        req.loggedInName = userInstance.name;

        // If hash is not valid, delete all cookies
      } else {
        res.clearCookie('loggedInHash', {secure: true, sameSite: 'None'});
        res.clearCookie('loggedInUserId', {secure: true, sameSite: 'None'});
        res.clearCookie('loggedInUsername', {secure: true, sameSite: 'None'});
      }
      next();
      return;
    }
    next();
  });

  // Check if user is logged in, else proceed
  const checkLoggedIn = async (req, res, next) => {
    if (req.isUserLoggedIn === false) {
      res.status(403).send('unauthenticated');
      return;
    }
    next();
  };

  // io.use(async (socket, next) => {
  //   console.log(`cookies:`);
  //   console.log(cookie);
  //   console.log(cookie.parse());
  //   // authenticateUserCookies(socket);
  //   next();
  // });
  io.on('connection', (socket) => {
    socket.emit('testFromServer', 'hello');

    // handle emit message 'addMsgToDb'
    socket.on('addMsgToDb', (payload) => {
      // save the msg to the db
      MessagesController.create(payload)
        .then((data) => {
          // emit msg back to client
          io.emit('receiveNewMsg', data);
        })
        .catch((err) => console.log(err));
    });
    socket.on('createRoom', (payload) => {
      // save the msg to the db
      RoomsController.create(payload)
        .then(() => {
          // emit msg back to client
          io.emit('updateRoomsList');
        })
        .catch((err) => console.log(err));
    });
  });

  // =====ROOMS
  // get all rooms
  app.get('/rooms/index', checkLoggedIn, RoomsController.index);
  app.post('/rooms/create', checkLoggedIn, RoomsController.create);

  // =====MESSAGES
  // get all messages for a given room
  app.get(
    '/messages/getAllMsgsInRoom/:roomId',
    checkLoggedIn,
    MessagesController.getAllMsgsInRoom
  );
  app.get(
    `/messages/allMsgsByRoom`,
    checkLoggedIn,
    MessagesController.getAllMsgsByRoom
  );
  // app.post('/messages/create', MessagesController.create);

  // =====USERS
  // get all rooms
  app.post('/users/signIn', UsersController.signIn);
  app.get('/users/signOut', checkLoggedIn, UsersController.signOut);
  app.post(
    '/users/setUserCredentialsInStore',
    UsersController.setUserCredentialsInStore
  );

  // =====HOME
  // special JS page. Include the webpack index.html file
  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
