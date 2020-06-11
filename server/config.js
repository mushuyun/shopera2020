// const dotenv = require("dotenv");
// dotenv.config();

module.exports = {
  PORT: process.env.PORT || 4000,
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/shopera",
  JWT_SECRET: process.env.JWT_SECRET || "somethingsecret",
};