module.exports = async (db) => {
  const User = db.user;
  await User.create({
    email: "admin@admin.fr",
    firstname: "Fabrice",
    lastname: "Sérapion",
    genre: "homme",
    age: 29,
    isAdmin: true,
  });
};
