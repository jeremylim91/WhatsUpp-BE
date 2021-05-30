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

  // ====
  const MessagesController = initMessagesController(db);
}
