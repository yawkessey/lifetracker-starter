const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const authRouter = require("./routes/auth.js");
const {PORT} = require("./config");

// middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/auth", authRouter);

//Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Good post");
});
app.listen(PORT, () => {
  console.log(`🚀 Example app listening on port ${PORT} 🚀`);
});
