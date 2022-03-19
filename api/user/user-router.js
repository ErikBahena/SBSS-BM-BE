const router = require("express").Router();
const User = require("./user-model.js");

const { restricted } = require("../auth/auth-middleware");
const { formatUserData } = require("../utils/index.js");

router.get("/:user_id", restricted, (req, res, next) => {
  User.findById(req.params.user_id)
    .then((user) => res.status(200).json(user))
    .catch(next);
});

router.put("/:user_id/:user_address_id", restricted, (req, res, next) => {
  const userAccount = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
  };

  const userAddress = {
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    postal_code: req.body.postal_code,
    country: req.body.country,
  };

  User.updateUser(
    req.params.user_id,
    req.params.user_address_id,
    userAccount,
    userAddress
  )
    .then((updatedUser) => {
      res.status(200).json(formatUserData(updatedUser));
    })
    .catch(next);
});

module.exports = router;
