const router = require("express").Router();

const User = require("../user/users-model");

const {
  validateUserLogin,
  validateUserRegister,
  alreadyExistsInDb,
  checkEmailExists,
  validatePassword,
  hashPassword,
} = require("./auth-middleware");

router.post(
  "/register",
  validateUserRegister,
  alreadyExistsInDb,
  hashPassword,
  (req, res, next) => {
    User.addUser(req.user)
      .then((newUser) => {
        newUser.token = req.token;
        res.status(201).json(newUser);
      })
      .catch(next);
  }
);

router.post(
  "/login",
  validateUserLogin,
  checkEmailExists,
  validatePassword,
  (req, res, next) => {
    res.status(200).json({
      username: req.userFromDb.username,
      email: req.userFromDb.email,
      user_id: req.userFromDb.user_id,
      photo_url: req.userFromDb.photo_url,
      token: req.token,
    });
  }
);

module.exports = router;
