module.exports = {
  PORT: process.env.PORT || 8080,
  JWT_SECRET: process.env.JWT_SECRET || "shdfi",
  BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 8,
};
