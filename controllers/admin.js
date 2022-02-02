const db = require('../models/index');

const Contenu = db.contenu;

const deleteContenu = async (req, res) => {
  const contenuId = req.params.id;
  await Contenu.destroy({
    where: {
      id: contenuId,
    },
  }).then((contenu) => {
    if (!contenu) {
      res
        .status(404)
        .send({ message: "Contenu introuvable. Suppression annulée" });
    }
    res.status(200).send({ message: "Contenu supprimé !" });
  });
};

module.exports = {
    deleteContenu,
}
