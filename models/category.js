const Category = (sequelize, DataTypes) => {
    return sequelize.define(
      "category",
      {
        category: {
          type: DataTypes.STRING(255),
          allowNull: false,
          validate: {
            notNull: {
              msg: "Quelle catégorie de contenu souhaitez vous ajouter ?",
            },
          },
        },
      },
      {
        sequelize,
        tableName: "category",
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
  
  module.exports = Category;
  