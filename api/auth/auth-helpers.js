const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { JWT_SECRET, BCRYPT_ROUNDS } = require("../../config");

const hashPassword = async (originalPassword) => {
  return await bcrypt.hash(originalPassword, BCRYPT_ROUNDS);
};

const tokenBuilder = (user) => {
  const payload = {
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    user_id: user.user_id,
  };

  const options = {
    expiresIn: "5d",
  };

  return jwt.sign(payload, JWT_SECRET, options);
};

module.exports = {
  tokenBuilder,
  hashPassword,
};
