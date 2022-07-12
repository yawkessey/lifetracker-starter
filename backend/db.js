const { Client } = require("pg");
const { getDatabaseUri } = require("./config");
require("colors");

const db = new Client({ connectionString: getDatabaseUri() });

db.connect((err) => {
  if (err) {
    console.error("Error connecting to postgres", err.stack);
  } else {
    console.log("Successfuly connected to postgres".pink);
  }
});

module.exports = db;
