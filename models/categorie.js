const Categorie = (sequelize, DataTypes) => {
    return sequelize.define(
      "categorie",
      {
        categorie: {
          type: DataTypes.STRING(255),
          allowNull: false,
          validate: {
            notNull: {
              msg: "Quelle catégorie de contenu souhaitez vous ajoutez ?",
            },
          },
        },
      },
      {
        sequelize,
        tableName: "categorie",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  };
  
  module.exports = Categorie;
  