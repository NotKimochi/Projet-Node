const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class Produit extends Model {}

Produit.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prix: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    rayon: {
      type: DataTypes.INTEGER,
    },
    quantite: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize: connection,
    modelName: "Produit",
  }
);

module.exports = Produit;
