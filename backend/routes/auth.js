const express = require("express");
const router = express.Router();
const User = require("../models/users");
const { restart } = require("nodemon");

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.post("/login", async (req, res, next) => {});

router.post("/register", async (req, res, next) => {});
// define the home page route
router.get("/", (req, res) => {
  res.send("Birds home page");
});
// define the about route
router.get("/about", (req, res) => {
  res.send("About birds");
});

module.exports = router;
