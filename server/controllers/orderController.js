const Order = require("../models/order");
const Product = require("../models/produit");
const OrderProducts = require("../models/orderProducts");

// Créer une commande
exports.createOrder = async (req, res) => {
  const { userId, products } = req.body; // `products` est un tableau [{ productId, quantity }]
  try {
    const totalPrice = await Promise.all(
      products.map(async (p) => {
        const product = await Product.findByPk(p.productId);
        return product.price * p.quantity;
      })
    ).then((prices) => prices.reduce((acc, price) => acc + price, 0));

    const order = await Order.create({ userId, totalPrice });

    await Promise.all(
      products.map((p) =>
        OrderProducts.create({
          orderId: order.id,
          productId: p.productId,
          quantity: p.quantity,
        })
      )
    );

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir toutes les commandes
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [{ model: Product, through: { attributes: ["quantity"] } }],
    });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir une commande spécifique
exports.getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByPk(id, {
      include: [{ model: Product, through: { attributes: ["quantity"] } }],
    });
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer une commande
exports.deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByPk(id);
    if (!order) return res.status(404).json({ error: "Order not found" });
    await order.destroy();
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
