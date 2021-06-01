import mongoose from 'mongoose';
export const ROOMS_OBJ_IDS = {
  DEV_HANGOUT: mongoose.Types.ObjectId(),
  FOODIES_UNITE: mongoose.Types.ObjectId(),
  CYCLING_BUDDIES: mongoose.Types.ObjectId(),
};

// msgs for the dev_hangouts room
export const DEV_HANGOUT_MSGS_OBJ_IDS = {
  MSG1: mongoose.Types.ObjectId(),
  MSG2: mongoose.Types.ObjectId(),
  MSG3: mongoose.Types.ObjectId(),
  MSG4: mongoose.Types.ObjectId(),
};
// msgs for the cycling buddies room
export const CYCLING_BUDDIES_MSGS_OBJ_IDS = {
  MSG1: mongoose.Types.ObjectId(),
  MSG2: mongoose.Types.ObjectId(),
  MSG3: mongoose.Types.ObjectId(),
  MSG4: mongoose.Types.ObjectId(),
  MSG5: mongoose.Types.ObjectId(),
  MSG6: mongoose.Types.ObjectId(),
};

export const getAssociatedMsgs = (obj) => {
  const arrOfVals = Object.values(obj);
  console.log(`arrOfVals is:`);
  console.log(arrOfVals);
  return arrOfVals;
};
