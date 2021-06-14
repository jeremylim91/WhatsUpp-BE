import {resolve} from 'path';
import db from './models/index.mjs';

import initRoomsController from './controllers/rooms.mjs';
import initUsersController from './controllers/users.mjs';
import initMessagesController from './controllers/messages.mjs';

export default function bindRoutes(app, io) {
  console.log('inside bind routes');
  // ====
  const UsersController = initUsersController(db);
  // ====
  const RoomsController = initRoomsController(db);
  // ====
  const MessagesController = initMessagesController(db);

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
  });

  // =====ROOMS
  // get all rooms
  app.get('/rooms/index', RoomsController.index);

  // =====MESSAGES
  // get all messages for a given room
  app.get(
    '/messages/getAllMsgsInRoom/:roomId',
    MessagesController.getAllMsgsInRoom
  );
  app.get(`/messages/allMsgsByRoom`, MessagesController.getAllMsgsByRoom);
  // app.post('/messages/create', MessagesController.create);

  // =====HOME
  // special JS page. Include the webpack index.html file
  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
