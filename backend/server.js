const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const authRouter = require("./routes/auth.js");
const jwt = require("jsonwebtoken");
const { NotFoundError } = require("./utils/errors.js");

// middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/auth", authRouter);

const { PORT } = require("./config");
const { restart } = require("nodemon");

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Good post");
});

//Error handling
app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message;

  res.status(status).json({
    error: { message, status },
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});
