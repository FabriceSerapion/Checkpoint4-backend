const Contenu = (sequelize, DataTypes) => {
  return sequelize.define(
    "contenu",
    {
      titre: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notNull: {
            msg: "Un film ou une série a forcément un titre, voyons !",
          },
        },
      },
      Réalisateur: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notNull: {
            msg: "Il est peu probable que le saint esprit est réalisé ce film...",
          },
        },
      },
      Année_de_sortie: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Avant ou après votre naissance, c'est à peu près sûr...",
          },
        },
      },
      Visibilité: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      // ajout image
      Affiche: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      categorie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Film ou série mais pas les deux !",
          },
        },
      },
    },
    {
      sequelize,
      tableName: "contenu",
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

module.exports = Contenu;
