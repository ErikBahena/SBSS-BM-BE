require('dotenv').config()

module.exports = {
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  BCRYPT_ROUNDS: +process.env.BCRYPT_ROUNDS,
  NODE_ENV: process.env.NODE_ENV,
};
