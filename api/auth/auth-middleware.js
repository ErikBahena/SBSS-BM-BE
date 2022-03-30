const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { tokenBuilder, hashPassword } = require("./auth-helpers");
const { JWT_SECRET } = require("../../config");

const validateUserLogin = (req, res, next) => {
  const user = req.body;

  if (
    !user.password ||
    user.password.trim() === "" ||
    !user.email ||
    user.email.trim() === ""
  )
    next({
      status: 400,
      message: "invalid login",
    });
  else next();
};

const validateUserRegister = (req, res, next) => {
  const user = req.body;

  if (
    !user.password ||
    user.password.trim() === "" ||
    !user.email ||
    user.email.trim() === "" ||
    !user.first_name ||
    user.first_name.trim() === "" ||
    !user.last_name ||
    user.last_name.trim() === ""
  )
    next({
      status: 400,
      message: "invalid registry",
    });
  else next();
};

const validatePassword = (req, res, next) => {
  if (bcrypt.compareSync(req.body.password, req.userFromDb.password)) {
    req.token = tokenBuilder(req.userFromDb);
    next();
  } else next({ status: 401, message: "wrong password", type: "password" });
};

const createTokenAndHashPassword = (req, res, next) => {
  const user = req.body;

  user.password = hashPassword(user.password);
  req.token = tokenBuilder(user);
  req.user = user;

  next();
};

const restricted = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) next({ status: 401, message: "token required" });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    // the decoded value would be equal to the object in the tokenBuilder funciton
    if (err) next({ status: 401, message: "token invalid" });
    else next();
  });
};

const checkTokenMatchesUserFromDb = (req, res, next) => {
  if (req.userFromDb.user_id === req.body.user_id) {
    req.token = tokenBuilder(req.userFromDb);
    next();
  } else next({ status: 401, message: "Stop trying to hack" });
};

const checkUserIdMatches = (req, res, next) => {
  if (req.userFromDb.user_id == req.params.user_id) next();
  else next({ status: 401, message: "user_id doest not match" });
};

module.exports = {
  validateUserLogin,
  validateUserRegister,
  validatePassword,
  createTokenAndHashPassword,
  restricted,
  checkTokenMatchesUserFromDb,
  checkUserIdMatches,
};
