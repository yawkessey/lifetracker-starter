//Allows us to load environment variables from our .env file
require("dotenv").config();
//Can add nice colors to our console.log
require("colors");
//process is a global variable that contains information about the current process

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

function getDatabaseUri() {
  const dbUser = process.env.DATABASE_USER || "postgres";
  const dbPass = process.env.DATABASE_PASS
    ? encodeURI(process.env.DATABASE_PASS)
    : "postgres";
  const dbHost = process.env.DATABASE_HOST || "localhost";
  const dbPort = process.env.DATABASE_PORT || 5432;
  const dbName = process.env.DATABASE_NAME || "lifetracker";

  return (
    process.env.DATABASE_URL ||
    `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
  );
}

console.log("Lifetracker Config".red);
console.log("PORT:".blue, PORT);
console.log("Database URI:".blue, getDatabaseUri());
console.log("---");

module.exports = {
  PORT,
  getDatabaseUri,
};
