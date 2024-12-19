const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class OrderProducts extends Model {}

OrderProducts.init(
  {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize: connection,
    modelName: "OrderProducts",
  }
);

module.exports = OrderProducts;
