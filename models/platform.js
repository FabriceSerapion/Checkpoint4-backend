const Platform = (sequelize, DataTypes) => {
  return sequelize.define(
    "platform",
    {
      platform: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notNull: {
            msg: "Quelle plateforme de streaming souhaitez vous ajouter ?",
          },
        },
      },
    },
    {
      sequelize,
      tableName: "platform",
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

module.exports = Platform;
