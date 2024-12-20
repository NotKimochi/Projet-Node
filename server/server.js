const express = require("express");
const checkAuth = require("./middlewares/checkAuth");
const securityRoutes = require("./routes/security");
const categorieRoutes = require("./routes/categorie");
const userRoutes = require("./routes/users");
const produitRoutes = require("./routes/produit");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

// Middleware global pour parser les requêtes JSON
app.use(express.json());

// Route de test (non protégée)
app.get("/", (req, res) => {
  res.send("Hello world !!");
});

// Routes publiques
app.use(securityRoutes);

// Routes protégées par `checkAuth`
app.use(checkAuth, categorieRoutes);
app.use(checkAuth, userRoutes);
app.use(checkAuth, produitRoutes);
app.use(checkAuth, orderRoutes);

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(3000, () => console.log("Server listening on port 3000"));
