require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY || "secret";
const BCRYPT_WORK_FACTOR = 12;

const DB_URI =
  process.env.NODE_ENV === "test"
    ? "postgresql:///capstone_spotify_users_db_test"
    : "postgresql:///capstone_spotify_users_db";
  

module.exports = {
  DB_URI,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
};