const router = require("express").Router();
const User = require("../user/user-model");

const {
  alreadyExistsInDb,
  checkEmailExists,
} = require("../user/user-middleware.js");

const {
  validateUserLogin,
  validateUserRegister,
  validatePassword,
  hashPassword,
} = require("./auth-middleware");

const { formatUserData } = require("../utils");

router.post(
  "/register",
  validateUserRegister,
  alreadyExistsInDb,
  hashPassword,
  (req, res, next) => {
    User.addUser(req.user)
      .then((newUser) => {
        res.status(201).json({ ...formatUserData(newUser), token: req.token });
      })
      .catch(next);
  }
);

router.post(
  "/login",
  validateUserLogin,
  checkEmailExists,
  validatePassword,
  (req, res) => {
    // would not want to send back passwords to the client, even if hashed.
    delete req.userFromDb.password;

    res
      .status(200)
      .json({ ...formatUserData(req.userFromDb), token: req.token });
  }
);

module.exports = router;
