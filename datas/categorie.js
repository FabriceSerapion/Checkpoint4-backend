module.exports = async (db) => {
  const Categorie = db.categorie;
  await Categorie.create({
    categorie: "Film"
  });

  await Categorie.create({
    categorie: "Série"
  });
};
