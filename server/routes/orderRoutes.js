const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const authMiddleware = require("../middlewares/checkAuth"); // Middleware pour sécuriser les routes

// Routes pour Order
router.post("/", authMiddleware, orderController.createOrder);
router.get("/", authMiddleware, orderController.getAllOrders);
router.get("/:id", authMiddleware, orderController.getOrderById);
router.delete("/:id", authMiddleware, orderController.deleteOrder);

module.exports = router;
