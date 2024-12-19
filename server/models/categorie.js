const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class Categorie extends Model {}

Categorie.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.ENUM("Fruits", "Légumes", "Électroniques","Surgelés","Viandes"),
    },
  },
  {
    sequelize: connection,
  }
);

module.exports = Categorie;