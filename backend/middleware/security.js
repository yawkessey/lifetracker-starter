const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const { UnauthorizedError } = require("../utils/errors");

//Create a function to extract the JWT from the request header
const jwtFrom = ({ headers }) => {
  if (headers?.authorization) {
    const [scheme, token] = headers.authorization.split(" ");
    if (scheme.trim() === "Bearer") {
      return token;
    }
  }
  return undefined;
};
//Create a function attatch the user to the res object

const extractUseFromJwt = (req, res, next) => {
  try {
    const token = jwtFrom(req);
    if (token) {
      const user = jwt.verify(token, SECRET_KEY);
      res.locals.user = user;
    }
    console.log("extraction works")
    return next();
  } catch (error) {
    return next();
  }
};

//Create a function to verify an authorized user exists
//Expects a user to exist in the res.locals.user object
const requireAuthenticatedUser = (req, res, next) => {
  try {
    const { user } = res.locals;
    if (user?.email) {
      throw new UnauthorizedError("Unauthorized");
    }
    console.log("hello");
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  jwtFrom,
  extractUseFromJwt,
  requireAuthenticatedUser,
};
