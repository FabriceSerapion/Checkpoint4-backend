const bcrypt = require('bcryptjs');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const hashPassword = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

const isValidPassword = (password, dataPassword) => {
  return bcrypt.compareSync(password, dataPassword);
};

const generateToken = () => {
  return jwt.sign(
    {
      userId: this.id,
      email: this.email,
    },
    process.env.JWT_SECRET || 'JWT_SUPER_SECRET',
    { expiresIn: process.env.EXPIRE_TIME || 360000 },
  );
};
const decodeToken = token => {
  return jwt.decodeToken(token);
};

const validateAuth = data => {
  return Joi.object({
    email: Joi.string().email().max(255).required(),
    password: Joi.string().min(8).max(30).required(),
  }).validate(data, { abortEarly: false }).error;
};

const validateRegister = data => {
  return Joi.object({
    lastname: Joi.string().max(255).required(),
    firstname: Joi.string().max(255).required(),
    email: Joi.string().email().max(255).required(),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
      .required(),
    // repeat_password: Joi.ref('password'),
  }).validate(data, { abortEarly: false }).error;
};

const authHelpers = {
  hashPassword,
  isValidPassword,
  validateAuth,
  validateRegister,
  generateToken,
  decodeToken,
};

module.exports = authHelpers;
