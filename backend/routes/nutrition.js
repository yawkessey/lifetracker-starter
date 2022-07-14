const express = require("express");
const router = express.Router();
const Nutrition = require("../models/nutrition");
const { restart } = require("nodemon");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// const { createUserJwt } = require("../utils/tokens");

router.post("/create", async (req, res, next) => {
//   Use model to print nutrition data to the database
  try {
    const nutrition = await Nutrition.create(req.body);
    return res.status(201).json(nutrition);
  } catch (error) {
    return next(error);
  }
    // return res.status(201).json(req.body);
});

router.get("/:id", async (req, res, next) => {})
module.exports = router;
