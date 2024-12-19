const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class Categorie extends Model {}

Animal.init(
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

module.exports = Animal;