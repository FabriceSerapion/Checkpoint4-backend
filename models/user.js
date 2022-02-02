const User = (sequelize, DataTypes) => {
    return sequelize.define(
      'user',
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        email: {
          type: DataTypes.STRING(180),
          allowNull: false,
          unique: 'UNIQ_8D93D649E7927C74',
        },
        password: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        lastname: {
          type: DataTypes.STRING(45),
          allowNull: false,
        },
        firstname: {
          type: DataTypes.STRING(45),
          allowNull: false,
        },
        genre: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        age: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        isAdmin: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'user',
        timestamps: false,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'id' }],
          },
          {
            name: 'UNIQ_8D93D649E7927C74',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'email' }],
          },
        ],
      },
    );
  };
  
  module.exports = User;
  