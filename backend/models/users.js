const { UnauthorizedError, BadRequestError } = require("../utils/errors");

class User {
  static async makeUser(user) {
    return {
      // user object... name... id... email...
    };
  }

  static async register(credentials) {
    //user has to enter all required fields
    const requiredFields = [];

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

    /*
        Check if user exists by email
        If found then throw error and prompt user to login 

        const existingUser = await User.fetchUserByEmail(credentials.email)
        if (existingUser) {
            throw new BadRequestError(`Duplicate email: ${credentials.email})
        }

    */
  }
}

module.exports = User;
