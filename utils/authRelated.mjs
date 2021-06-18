import jsSHA from 'jssha';

// in production mode, the salt should be a secret
const SALT = 'hello';

/**
 * 
 // Fn that converts a variable into a hashed string
 * @param {string} stringToHash - string that you want to hash
 * @returns {string} - A hashed string
 */
export function getHashedString(stringToHash) {
  const shaObj = new jsSHA('SHA-512', 'TEXT', {encoding: 'UTF8'});
  shaObj.update(stringToHash);
  const hashedString = shaObj.getHash('HEX');
  return hashedString;
}
/**
 *
 * @param {string} userId - User's id
 * @returns {string} - A hashed string consisting of the user's id combined with a Salt
 */
// Fn that converts supplied userId into a hash (using a salt)
export function convertUserIdToHash(userId) {
  const shaObj = new jsSHA('SHA-512', 'TEXT', {encoding: 'UTF8'});
  const unhashedCookieString = `${userId}-${SALT}`;
  shaObj.update(unhashedCookieString);
  const hashedCookieString = shaObj.getHash('HEX');
  return hashedCookieString;
}

// Doesn't work:
// export async function authenticateUserCookies(req, res, next, db) {
//   console.log('req is::');
//   console.log(req);
//   req.isUserLoggedIn = false;

//   // destructure cookies from client browser
//   const {loggedInUserId, loggedInHash} = req.cookies;

//   // check if loggedInUserId has been set as a cookie
//   if (loggedInUserId && loggedInHash) {
//     console.log(`loggedInUserId is:`);
//     console.log(loggedInUserId);
//     // combine the loggedInUserId with a salt, then hash the string
//     const hash = convertUserIdToHash(loggedInUserId);

//     if (loggedInHash === hash) {
//       // Double check by finding this user in the database
//       const userInstance = await db.User.findById(loggedInUserId);
//       // If there isn't such a user, send a forbiden status
//       if (!userInstance) {
//         console.log('no such userInstance');
//         res.status(503).send('no such user instance');
//         return;
//       }
//       // else, the user's credentials check out, set isUserLoggedIn to true
//       req.isUserLoggedIn = true;
//       // set the userId as a key in the request object so that it's accessible in the route
//       req.loggedInUserId = userInstance._id;
//       req.loggedInUsername = userInstance.username;
//       req.loggedInName = userInstance.name;

//       // If hash is not valid, delete all cookies
//     } else {
//       res.clearCookie('loggedInHash', {secure: true, sameSite: 'None'});
//       res.clearCookie('loggedInUserId', {secure: true, sameSite: 'None'});
//       res.clearCookie('loggedInUsername', {secure: true, sameSite: 'None'});
//     }
//     next();
//     return;
//   }
//   next();
// }
