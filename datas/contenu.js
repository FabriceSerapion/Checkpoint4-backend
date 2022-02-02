module.exports = async (db) => {
  const Contenu = db.contenu;
  await Contenu.create({
    titre: "Mad Max: Fury Road",
    Réalisateur: "George Miller",
    Année_de_sortie: 2015,
    Visibilité: "Netflix",
    affiche: "",
    categorie_id: 1,
  });

  await Contenu.create({
    titre: "Frankenstein",
    Réalisateur: "James Whale",
    Année_de_sortie: 1931,
    Visibilité: "",
    affiche: "",
    categorie_id: 1,
  });

  await Contenu.create({
    titre: "Halloween",
    Réalisateur: "John Carpenter",
    Année_de_sortie: 1978,
    Visibilité: "Amazon",
    affiche: "",
    categorie_id: 1,
  });

  await Contenu.create({
    titre: "The Thing",
    Réalisateur: "John Carpenter",
    Année_de_sortie: 1982,
    Visibilité: "OCS",
    affiche: "",
    categorie_id: 1,
  });

  await Contenu.create({
    titre: "Sherlock",
    Réalisateur: "Mark Gatiss et Steven Moffat",
    Année_de_sortie: 2010,
    Visibilité: "OCS",
    affiche: "",
    categorie_id: 2,
  });
};
