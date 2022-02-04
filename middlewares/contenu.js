const db = require('../models');

const Contenu = db.contenu;

const checkContenuExist = (req, res, next) => {
  Contenu.findOne({
    where: {
      id: req.params.id,
    },
  }).then(contenu => {
    if (!contenu) {
      res.status(404).send({
        message: 'Contenu introuvable. Mise à jour impossible.',
      });
    } else {
      res.status(400);
    }
    next();
  });
};

const verifyContenu = {
  checkContenuExist,
};

module.exports = verifyContenu;
