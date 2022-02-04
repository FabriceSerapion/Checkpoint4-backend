// const User = require('../models/user');
const authHelpers = require('../middlewares/auth');
const db = require('../models');
const User = db.user;

// Se connecter
const signin = (req, res) => {
  let validationErrors = null;

  if (!req.body.email && !req.body.password)
    return res.status(409).send('Aucune donnée entrée');
  validationErrors = authHelpers.validateAuth(req.body);
  if (validationErrors) return res.status(422).json({ validationErrors });
    User.findOne({
      where: { email: req.body.email },
    },
  )
    .then(user => {
      const isUserPassword = authHelpers.isValidPassword(
        req.body.password,
        user.password,
      );
      const errAuth = 'USER_OR_PASSWORD_INCORRECT';
      if (req.body.email !== user.email && !isUserPassword)
        return Promise.reject(errAuth);
      /* Création du cookie */
      const token = authHelpers.generateToken(user.id);
      res.cookie('user_token', token);
      return res
        .status(200)
        .send({ user: user.dataValues, accessToken: token });
    })
    .catch(err => {
      if (err === 'USER_OR_PASSWORD_INCORRECT')
        res.status(422).send('Email ou Mot de passe incorrect');
      return res
        .status(500)
        .json(err.message, { message: 'Erreur connexion utilisateur' });
    });
};

// S'inscrire
const signup = (req, res) => {
  // const errRegister = authHelpers.validateRegister(req.body);
  User.findOne({
    where: { email: req.body.email },
  })
    .then(existingEmail => {
      // if (errRegister)
      //   return res.status(422).json({ message: 'Data Invalide' });
      if (existingEmail)
        return res.status(409).json({ message: 'Email dupliqué' });
      return User.create({
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        email: req.body.email,
        password: authHelpers.hashPassword(req.body.password),
        isAdmin: req.body.isAdmin,
      });
    })
    .then(createdUser => {
      res
        .status(200)
        .json({ message: 'Utilisateur crée avec succès', user : createdUser });
    })
    .catch(err => {
      res.status(500).json(err.message, {
        message: 'Erreur dans la sauvegarde du nouvel utilisateur',
      });
    });
};

module.exports = { signin, signup };
