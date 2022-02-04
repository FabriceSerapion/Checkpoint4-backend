module.exports = async (db) => {
  const Contenu = db.contenu;
  await Contenu.create({
    title: "Mad Max: Fury Road",
    director: "George Miller",
    releaseDate: 2015,
    poster: "",
    category_id: 1,
    platform_id: 1,
  });

  await Contenu.create({
    title: "Frankenstein",
    director: "James Whale",
    releaseDate: 1931,
    poster: "",
    category_id: 1,
    platform_id: 2,
  });

  await Contenu.create({
    title: "Halloween",
    director: "John Carpenter",
    releaseDate: 1978,
    poster: "",
    category_id: 1,
    platform_id: 1,
  });

  await Contenu.create({
    title: "The Thing",
    director: "John Carpenter",
    releaseDate: 1982,
    poster: "",
    category_id: 1,
    platform_id: 1,
  });

  await Contenu.create({
    title: "Sherlock",
    director: "Mark Gatiss et Steven Moffat",
    releaseDate: 2010,
    poster: "",
    category_id: 2,
    platform_id: 1,
  });

  await Contenu.create({
    title: "Parks and recreation",
    director: "Greg Daniels et Michael Schur",
    releaseDate: 2009,
    poster: "",
    category_id: 2,
    platform_id: 2,
  });

  await Contenu.create({
    title: "Peaky Blinders",
    director: "Steven Knight",
    releaseDate: 2013,
    poster: "",
    category_id: 2,
    platform_id: 1,
  });

  await Contenu.create({
    title: "Les sopranos",
    director: "David Chase",
    releaseDate: 1999,
    poster: "",
    category_id: 2,
    platform_id: 2,
  });

  await Contenu.create({
    title: "Breaking Bad",
    director: "Vince Gilligan",
    releaseDate: 2008,
    poster: "",
    category_id: 2,
    platform_id: 2,
  });
};
