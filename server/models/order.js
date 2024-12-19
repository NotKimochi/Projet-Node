const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class Order extends Model {}

Order.init(
  {
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    status: {
      type: DataTypes.ENUM("pending", "completed", "canceled"),
      defaultValue: "pending",
    },
  },
  {
    sequelize: connection,
    modelName: "Order",
  }
);

module.exports = Order;
