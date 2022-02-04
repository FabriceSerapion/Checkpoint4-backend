const db = require('../models');

const User = db.user;

checkEmailUser = (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "L'utilisateur existe",
      });
      return;
    }
    next();
  });
};

const verifySignUp = {
  checkEmailUser,
};

module.exports = verifySignUp;
