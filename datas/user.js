const bcrypt = require('bcryptjs');

module.exports = async (db) => {
  const User = db.user;
  await User.create({
    email: "admin@admin.fr",
    firstname: "Fabrice",
    lastname: "Sérapion",
    password: bcrypt.hashSync('fabriceserapion', 8),
    genre: "homme",
    age: 29,
    isAdmin: true,
  });
};
