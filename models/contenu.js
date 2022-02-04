const Contenu = (sequelize, DataTypes) => {
  return sequelize.define(
    "contenu",
    {
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notNull: {
            msg: "Un film ou une série a forcément un titre, voyons !",
          },
        },
      },
      director: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notNull: {
            msg: "Il est peu probable que le saint esprit est réalisé ce film...",
          },
        },
      },
      releaseDate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Avant ou après votre naissance, c'est à peu près sûr...",
          },
        },
      },
      platform_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'platform',
          key: 'id',
        },
      },
      // ajout image
      poster: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'category',
          key: 'id',
        },
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
