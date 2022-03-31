const router = require("express").Router();
const User = require("../user/user-model");
const { hashPassword } = require("./auth-helpers");

const {
  alreadyExistsInDb,
  checkEmailExists,
} = require("../user/user-middleware.js");

const {
  validateUserLogin,
  validateUserRegister,
  validatePassword,
  createTokenAndHashPassword,
  checkTokenMatchesUserFromDb,
  checkUserIdMatches,
  restricted,
} = require("./auth-middleware");

const { formatUserData } = require("../utils");

router.post(
  "/register",
  validateUserRegister,
  alreadyExistsInDb,
  createTokenAndHashPassword,
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

router.post(
  "/reload",
  restricted,
  checkEmailExists,
  checkTokenMatchesUserFromDb,
  (req, res) => {
    delete req.userFromDb.password;

    res
      .status(200)
      .json({ ...formatUserData(req.userFromDb), token: req.token });
  }
);

// reset user password, requires user_id in req.params, {email, password, newPassword} in req.body
router.put(
  "/update-password/:user_id",
  restricted,
  checkEmailExists,
  checkUserIdMatches,
  validatePassword,
  (req, res, next) => {
    const newPassword = hashPassword(req.body.newPassword);

    User.updatePassword(req.params.user_id, newPassword)
      .then(() => res.status(201).json("success"))
      .catch(next);
  }
);

module.exports = router;
