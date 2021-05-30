const data = [
  {
    name: 'dev hangout',
    createdBy: 'jeremylim_91',
  },
  {
    name: 'foodies unite',
    createdBy: 'jeremylim_91',
  },
  {
    name: 'cycling buddies',
    createdBy: 'josephpok_91',
  },
];

const insertRoomSeed = async (db) => {
  return await db.Room.insertMany(data);
};

export default insertRoomSeed;
