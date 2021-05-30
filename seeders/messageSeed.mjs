const data = [
  {
    message: "hey bro how's it going",
    username: 'jeremylim_91',
    timestamp: Date.now() + 10,
    room_id: 'dev hangout',
  },
  {
    message: "hey i'm good! how're you?",
    username: 'joshualim_91',
    timestamp: Date.now() + 20,
    room_id: 'dev hangout',
  },
  {
    message: 'nth much going on.',
    username: 'jeremylim_91',
    timestamp: Date.now() + 30,
    room_id: 'dev hangout',
  },
  {
    message:
      'Just wanted to catchup with you on Dev work! What projects you working on lately?',
    username: 'jeremylim_91',
    timestamp: Date.now() + 500,
    room_id: 'dev hangout',
  },
  {
    message: 'What time are we meeting and where?',
    username: 'josephpok_91',
    timestamp: Date.now() + 10,
    room_id: 'cycling buddies',
  },
  {
    message: '3am at the usual spot!',
    username: 'jeremylim_91',
    timestamp: Date.now() + 700,
    room_id: 'cycling buddies',
  },
  {
    message: 'okie cool thanks',
    username: 'josephpok_91',
    timestamp: Date.now() + 5000,
    room_id: 'cycling buddies',
  },
  {
    message: "Sorry i'm new. can i clarify where the 'usual' refers to? ",
    username: 'joshualim_91',
    timestamp: Date.now() + 70000,
    room_id: 'cycling buddies',
  },
  {
    message: 'Kranji, by the coffee shop',
    username: 'josephpok_91',
    timestamp: Date.now() + 70200,
    room_id: 'cycling buddies',
  },
  {
    message: 'Got it, thanks bro',
    username: 'joshualim_91',
    timestamp: Date.now() + 70500,
    room_id: 'cycling buddies',
  },
];

const insertMessageSeed = async (db) => {
  return await db.Message.insertMany(data);
};

export default insertMessageSeed;
