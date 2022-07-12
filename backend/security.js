const bcrypt = require('bcrypt');
const pw = 'password';

bcrypt.hash(pw, 10, (err, hashedPw) => {
    console.log(pw);
    console.log(hashedPw);
})