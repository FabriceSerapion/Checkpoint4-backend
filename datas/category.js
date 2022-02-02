module.exports = async (db) => {
  const Category = db.category;
  await Category.create({
    category: "Film"
  });

  await Category.create({
    category: "Série"
  });
};
