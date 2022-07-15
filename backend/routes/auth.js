const express = require("express");
const router = express.Router();
const User = require("../models/users");
const { restart } = require("nodemon");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { createUserJwt } = require("../utils/tokens");
const security = require("../middleware/security");

router.post(
  "/login",
  security.requireAuthenticatedUser,
  async (req, res, next) => {
    try {
      //take users email and password and authenticate them
      const user = await User.login(req.body);
      const token = createUserJwt(user);
      return res.status(200).json({ user, token });
    } catch (err) {
      return next(err);
    }
  }
);

router.post("/register", async (req, res, next) => {
  try {
    //take users email and password and register them
    //Create new user in the database
    const user = await User.register(req.body);
    const token = createUserJwt(user);
    return res.status(201).json({ user, token });
  } catch (err) {
    return next(err);
  }
});

router.get("/me", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    //take users email and password and authenticate them
    const { email } = res.locals.user;
    console.log("email", email);
    const user = await User.getUserByEmail(email);
    console.log("user", user);
    const publicUser = User.makeUser(user);
    console.log("publicUser:", publicUser);
    // const user = await User.getUserByEmail(req.body.email);
    // const publicUser = User.makeUser(user);
    return res.status(200).json({ user: publicUser });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
