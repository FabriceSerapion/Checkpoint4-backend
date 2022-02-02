const db = require('../models/index');

const Contenu = db.contenu;

// SELECT * FROM contenu
const selectAllContenu = async (req, res) => {
  await Contenu.findAll({}).then(contenu => {
    if (!contenu) {
      res.status(404).send({ message: 'Films introuvables' });
    }
    res.status(200).send({
      message: 'Films trouvés !',
      data: contenu,
    });
  });
};

const selectOneContenuById = async (req, res) => {
    const contenuId = req.params.id;
    await Contenu.findByPk(contenuId, {}).then(contenu => {
      if (!contenu) {
        res.status(404).send({ message: 'Contenu introuvable' });
      }
      res.status(200).send({
        message: 'Contenu sélectionné !',
        data: contenu,
      });
    });
  };

module.exports = {
    selectAllContenu,
    selectOneContenuById,
}