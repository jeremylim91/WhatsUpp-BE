export default function initRoomsController(db) {
  const index = async (req, res) => {
    // query the db to get all the rooms
    try {
      const allRooms = await db.Room.find();
      console.log(allRooms);
      res.send(allRooms);
    } catch (error) {
      console.log(error);
      // pass errors to express to use its default error handler
      next(error);
    }
  };
  return {
    index,
  };
}
