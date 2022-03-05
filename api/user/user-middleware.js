const User = require("./user-model");

const alreadyExistsInDb = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findBy("email", email);

  if (user) next({ status: 400, message: "email already in use" });
  else next();
};

const checkEmailExists = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findBy("email", email);

  if (!user)
    next({
      status: 400,
      message: "that email is not registered to any user",
      type: "email",
    });

  req.userFromDb = user;
  next();
};

module.exports = {
  checkEmailExists,
  alreadyExistsInDb,
};
