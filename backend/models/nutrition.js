const { UnauthorizedError, BadRequestError } = require("../utils/errors");
const db = require("../db");

class Nutrition {
  static async getNutrition(id) {
    const query = `SELECT * FROM nutrition WHERE id = $1`;
    const values = [id];
    const result = await db.query(query, values);
    return result.rows[0];
  }


  static async create(nutrition) {
    const requiredFields = [
      "name",
      "category",
      "calories",
      "image_url",
      "user_id",
    ];
    requiredFields.forEach((field) => {
      if (!nutrition.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body`);
      }
    });

    const query = `INSERT INTO nutrition (name, category, calories, image_url, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const result = await db.query(query, [
      nutrition.name,
      nutrition.category,
      nutrition.calories,
      nutrition.image_url,
      nutrition.user_id,
    ]);
    return result.rows[0];
  }
}

module.exports = Nutrition;
