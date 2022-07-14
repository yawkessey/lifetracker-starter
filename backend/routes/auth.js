const express = require("express");
const router = express.Router();
const User = require("../models/users");
const { restart } = require("nodemon");
const jwt = require("jsonwebtoken");
require("dotenv").config();
router.post("/login", async (req, res, next) => {
  try {
    //take users email and password and authenticate them
    const user = await User.login(req.body);
    return res.status(200).json({ user });
  } catch (err) {
    return next(err);
  }
});

router.get("/posts", async (req, res) => {
  const email = await User.getUserByEmail(req.body.email);
  const user = {userEmail: email};
  const token = jwt.sign(user, process.env.SECRET_KEY);
  res.json({accessToken: token})
})

function aunthenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
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
