const data = [
  {
    name: 'Jeremy',
    username: 'jeremylim_91',
    password: 'password1',
  },
  {
    name: 'Joshua',
    username: 'joshualim_91',
    password: 'password1',
  },
  {
    name: 'Joseph',
    username: 'josephpok_91',
    password: 'password1',
  },
];

const insertUserSeed = async (db) => {
  return await db.User.insertMany(data);
};

export default insertUserSeed;
