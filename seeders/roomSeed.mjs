import {
  ROOMS_OBJ_IDS,
  DEV_HANGOUT_MSGS_OBJ_IDS,
  CYCLING_BUDDIES_MSGS_OBJ_IDS,
  getAssociatedMsgs,
} from './objectIds.mjs';

// import the relevant object ids
const {DEV_HANGOUT_OBJ_ID, FOODIES_UNITE_OBJ_ID, CYCLING_BUDDIES_OBJ_ID} =
  ROOMS_OBJ_IDS;

const data = [
  {
    _id: DEV_HANGOUT_OBJ_ID,
    name: 'dev hangout',
    createdBy: 'jeremylim_91',
    associated_messages: getAssociatedMsgs(DEV_HANGOUT_MSGS_OBJ_IDS),
  },
  {
    _id: FOODIES_UNITE_OBJ_ID,
    name: 'foodies unite',
    createdBy: 'jeremylim_91',
    associated_messages: [],
  },
  {
    _id: CYCLING_BUDDIES_OBJ_ID,
    name: 'cycling buddies',
    createdBy: 'josephpok_91',
    associated_messages: getAssociatedMsgs(CYCLING_BUDDIES_MSGS_OBJ_IDS),
  },
];

const insertRoomSeed = async (db) => {
  return await db.Room.insertMany(data);
};

export default insertRoomSeed;
