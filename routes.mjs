import {resolve} from 'path';
import db from './models/index.mjs';

import initRoomsController from './controllers/rooms.mjs';
import initUsersController from './controllers/users.mjs';
import initMessagesController from './controllers/messages.mjs';
// import {convertUserIdToHash} from './utils/passwordRelatedFns.mjs';

export default function bindRoutes(app) {
  console.log('inside bind routes');

  // ====
  const UsersController = initUsersController(db);

  // ====
  const RoomsController = initRoomsController(db);
  // get all rooms
  app.get('/rooms/index', RoomsController.index);

  // ====
  const MessagesController = initMessagesController(db);
  // get all messages for a given room
  app.get(
    '/messages/getAllMsgsInRoom/:roomId',
    MessagesController.getAllMsgsInRoom
  );
  app.post('/messages/create', MessagesController.create);

  // special JS page. Include the webpack index.html file
  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
