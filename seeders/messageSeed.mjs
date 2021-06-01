import {
  ROOMS_OBJ_IDS,
  DEV_HANGOUT_MSGS_OBJ_IDS,
  CYCLING_BUDDIES_MSGS_OBJ_IDS,
} from './objectIds.mjs';

const data = [
  {
    _id: DEV_HANGOUT_MSGS_OBJ_IDS.MSG1,
    message: "hey bro how's it going",
    username: 'jeremylim_91',
    timestamp: Date.now() + 10,
    room_id: ROOMS_OBJ_IDS.DEV_HANGOUT,
  },
  {
    _id: DEV_HANGOUT_MSGS_OBJ_IDS.MSG2,
    message: "hey i'm good! how're you?",
    username: 'joshualim_91',
    timestamp: Date.now() + 20,
    room_id: ROOMS_OBJ_IDS.DEV_HANGOUT,
  },
  {
    _id: DEV_HANGOUT_MSGS_OBJ_IDS.MSG3,
    message: 'nth much going on.',
    username: 'jeremylim_91',
    timestamp: Date.now() + 30,
    room_id: ROOMS_OBJ_IDS.DEV_HANGOUT,
  },
  {
    _id: DEV_HANGOUT_MSGS_OBJ_IDS.MSG4,
    message:
      'Just wanted to catchup with you on Dev work! What projects you working on lately?',
    username: 'jeremylim_91',
    timestamp: Date.now() + 500,
    room_id: ROOMS_OBJ_IDS.DEV_HANGOUT,
  },
  {
    _id: CYCLING_BUDDIES_MSGS_OBJ_IDS.MSG1,
    message: 'What time are we meeting and where?',
    username: 'josephpok_91',
    timestamp: Date.now() + 10,
    room_id: ROOMS_OBJ_IDS.CYCLING_BUDDIES,
  },
  {
    _id: CYCLING_BUDDIES_MSGS_OBJ_IDS.MSG2,
    message: '3am at the usual spot!',
    username: 'jeremylim_91',
    timestamp: Date.now() + 700,
    room_id: ROOMS_OBJ_IDS.CYCLING_BUDDIES,
  },
  {
    _id: CYCLING_BUDDIES_MSGS_OBJ_IDS.MSG3,
    message: 'okie cool thanks',
    username: 'josephpok_91',
    timestamp: Date.now() + 5000,
    room_id: ROOMS_OBJ_IDS.CYCLING_BUDDIES,
  },
  {
    _id: CYCLING_BUDDIES_MSGS_OBJ_IDS.MSG4,
    message: "Sorry i'm new. can i clarify where the 'usual' refers to? ",
    username: 'joshualim_91',
    timestamp: Date.now() + 70000,
    room_id: ROOMS_OBJ_IDS.CYCLING_BUDDIES,
  },
  {
    _id: CYCLING_BUDDIES_MSGS_OBJ_IDS.MSG5,
    message: 'Kranji, by the coffee shop',
    username: 'josephpok_91',
    timestamp: Date.now() + 70200,
    room_id: ROOMS_OBJ_IDS.CYCLING_BUDDIES,
  },
  {
    _id: CYCLING_BUDDIES_MSGS_OBJ_IDS.MSG6,
    message: 'Got it, thanks bro',
    username: 'joshualim_91',
    timestamp: Date.now() + 70500,
    room_id: ROOMS_OBJ_IDS.CYCLING_BUDDIES,
  },
];

const insertMessageSeed = async (db) => {
  return await db.Message.insertMany(data);
};

export default insertMessageSeed;
