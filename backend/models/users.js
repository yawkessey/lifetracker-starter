const { UnauthorizedError, BadRequestError } = require("../utils/errors");
const db = require("../db");
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../config");

class User {
  static async makeUser(user) {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      // password: user.password,
      // created_at: user.created_at,
      // updated_at: user.updated_at,
    };
  }

  static async login(credentials) {
    const requiredFields = ["email", "password"];
    console.log(credentials);

    requiredFields.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body`);
      }
    });

    const user = await User.getUserByEmail(credentials.email);

    if (user) {
      const isValid = await bcrypt.compare(credentials.password, user.password);
      if (isValid) {
        return User.makeUser(user);
      }
    }
    throw new UnauthorizedError("Invalid email/password combination");
  }

  static async register(credentials) {
    //user has to enter all required fields
    console.log(credentials);
    const requiredFields = [
      "email",
      "password",
      "username",
      "firstName",
      "lastName",
    ];

    //map through the required fields and throw error message for missing field
    requiredFields.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body`);
      }
    });

    //Validate email
    if (credentials.email.indexOf("@") <= 0) {
      throw new BadRequestError("Invalid email");
    }

    //Existing User
    //Fetch function that gets them by email
    const existingUser = await User.getUserByEmail(credentials.email);
    if (existingUser) {
      throw new BadRequestError("User already exists");
    }

    //Encrypt password
    const hashedPw = await bcrypt.hash(
      credentials.password,
      BCRYPT_WORK_FACTOR
    );
    const lowercasedEmail = credentials.email.toLowerCase();

    const result = await db.query(
      `
      INSERT INTO users (email, password, username, first_name, last_name)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id,
      email,
      username,
      first_name,
      last_name,
      created_at,
      updated_at`,
      [
        lowercasedEmail,
        hashedPw,
        credentials.username,
        credentials.firstName,
        credentials.lastName,
      ]
    );

    const user = result.rows[0];
    return User.makeUser(user);
  }

  static async getUserByEmail(email) {
    if (!email) {
      throw new BadRequestError("Missing email in request body");
    }
    const query = `SELECT * FROM users WHERE email = $1 `;
    const result = await db.query(query, [email.toLowerCase()]);
    const user = result.rows[0]; //Grabs first row

    return user;
  }
}

module.exports = User;
