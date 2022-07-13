const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const { UnauthorizedError } = require("../utils/errors");

//Create a function to extract the JWT from the request header
const jwtForm = ({ headers }) => {
  if (headers?.authorization) {
    const [scheme, token] = headers.authorization.split(" ");
    if (scheme.trim() === "Bearer") {
      return token;
    }
  }
  return undefined;
};
//Create a function attatch the user to the res object
const extractUseFromJwt = (res) => {}
//Create a function to verify an authorized user exists
