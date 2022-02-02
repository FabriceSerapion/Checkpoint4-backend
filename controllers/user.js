const db = require('../models/index');

const Contenu = db.contenu;

const addContenu = async (req, res) => {
    const { title, director, release_date, where_to_watch, poster, category_id } = req.body;
    await Contenu.create({
      title,
      director,
      release_date,
      where_to_watch,
      poster,
      category_id
    }).then((contenudata) => {
      if (!contenudata) {
        res
          .status(409)
          .send({ message: "Un champ manquant est requis ! Produit non ajouté" });
      }
      res.status(200).send({
        message: "Produit ajouté !",
        data: contenudata
      });
    });
  };

const updateContenu = async (req, res) => {
  const contenuId = req.params.id;
  const { title, director, release_date, where_to_watch, poster, category_id } = req.body;
  await Contenu.update(
    { title, director, release_date, where_to_watch, poster, category_id },
    {
      where: {
        id: contenuId,
      },
    }
  ).then((contenudata) => {
    if (!contenudata) {
      res.send({
        message:
          "Une erreur est survenue. Veuillez vérifier votre saisie. Produit non mis à jour",
      });
    }
    res.status(200).send({ message: "Contenu mis à jour !" });
    console.log("contenu data : ", contenudata);
  });
};


module.exports = {
    addContenu,
    updateContenu,
}