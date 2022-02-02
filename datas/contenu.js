module.exports = async (db) => {
  const Contenu = db.contenu;
  await Contenu.create({
    title: "Mad Max: Fury Road",
    director: "George Miller",
    release_date: 2015,
    where_to_watch: "Netflix",
    poster: "",
    category_id: 1,
  });

  await Contenu.create({
    title: "Frankenstein",
    director: "James Whale",
    release_date: 1931,
    where_to_watch: "",
    poster: "",
    category_id: 1,
  });

  await Contenu.create({
    title: "Halloween",
    director: "John Carpenter",
    release_date: 1978,
    where_to_watch: "Amazon",
    poster: "",
    category_id: 1,
  });

  await Contenu.create({
    title: "The Thing",
    director: "John Carpenter",
    release_date: 1982,
    where_to_watch: "OCS",
    poster: "",
    category_id: 1,
  });

  await Contenu.create({
    title: "Sherlock",
    director: "Mark Gatiss et Steven Moffat",
    release_date: 2010,
    where_to_watch: "OCS",
    poster: "",
    category_id: 2,
  });
};
