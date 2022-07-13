const express = require("express");
const router = express.Router();
const User = require("../models/users");
const { restart } = require("nodemon");


router.post("/login", async (req, res, next) => {
  try {
    //take users email and password and authenticate them
    const user = await User.login(req.body);
    return res.status(200).json({ user });
  } catch (err) {
    return next(err);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    //take users email and password and register them
    //Create new user in the database
    const user = await User.register(req.body);
    return res.status(201).json({ user });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
