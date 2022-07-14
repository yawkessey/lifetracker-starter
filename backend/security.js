const bcrypt = require('bcrypt');
const pw = 'password';
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');
const { UnauthorizedError } = require('./utils/errors');
bcrypt.hash(pw, 10, (err, hashedPw) => {
    console.log(pw);
    console.log(hashedPw);
})