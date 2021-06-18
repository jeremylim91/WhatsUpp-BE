import {getHashedString, convertUserIdToHash} from '../utils/authRelated.mjs';

export default function initUsersController(db) {
  const signIn = async (req, res) => {
    const {username, password} = req.body;
    console.log(username);
    console.log(password);

    // hash the user-entered password so tt it can be compared against what we have in the db
    const hashedPassword = getHashedString(password);
    try {
      const userInstance = await db.User.findOne({
        username,
        password: hashedPassword,
      });
      console.log(userInstance);
      if (!userInstance) {
        res.send({auth: false}).status(403);
        return;
      }

      res.cookie('loggedInUsername', userInstance.username);
      res.cookie('loggedInUserId', userInstance.id);
      // create a session id by creating a hash that is a combination of the userId and a Salt
      res.cookie('loggedInHash', convertUserIdToHash(userInstance.id));
      res.send({auth: true, user: userInstance});
    } catch (err) {
      console.log(err);
      res.send('Sorry, something went wrong').status(500);
    }
  };

  const setUserCredentialsInStore = async (req, res) => {
    console.log('inside users controller: setUserCredentialsInStore');
    // Destructure user credentials from the request body (the middleware should have saved the the credentials into the req body)
    const {loggedInName, loggedInUserId, loggedInUsername} = req;

    res.send({loggedInName, loggedInUserId, loggedInUsername});
  };
  const signOut = async (req, res) => {
    // remove all the cookies relevant to user auth
    res.clearCookie('loggedInHash', {secure: true, sameSite: 'None'});
    res.clearCookie('loggedInUserId', {secure: true, sameSite: 'None'});
    res.clearCookie('loggedInUsername', {secure: true, sameSite: 'None'});
    res.status(200).send('cookies cleared');
  };
  return {
    signIn,
    setUserCredentialsInStore,
    signOut,
  };
}
