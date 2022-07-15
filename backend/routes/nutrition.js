const express = require("express");
const router = express.Router();
const Nutrition = require("../models/nutrition");
const { restart } = require("nodemon");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const security = require("../middleware/security");
const { createUserJwt } = require("../utils/tokens");

router.post(
  "/create",
  security.requireAuthenticatedUser,
  async (req, res, next) => {
    //   Use model to print nutrition data to the database
    try {
      const { email } = res.locals.user;
      const nutrition = await Nutrition.create(req.body, email);
      return res.status(201).json(nutrition);
    } catch (error) {
      return next(error);
    }
    // return res.status(201).json(req.body);
  }
);

router.get("/:id", async (req, res, next) => {
  console.log("parameter:", req.params.id);
  res.status(200).json(Nutrition.getNutrition(req.params.id));
});
module.exports = router;
