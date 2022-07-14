// Stores token functions
/*
1. create token 
2. Validate token
3. Function to accept user object 
*/
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

const generateToken = (data) => jwt.sign(data, SECRET_KEY, { expiresIn: "24h" });

const validateToken = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (err) {
    return {};
  }
};

const createUserJwt = (user) => {
  const payload = {
    email: user.email,
    isAdmin: user.isAdmin || false,
  };
  return generateToken(payload);
};

module.exports = {
  generateToken,
  validateToken,
  createUserJwt
};
