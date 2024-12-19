const { Router } = require("express");
const ProduitController = require("../controllers/produit");

const router = new Router();

router.get("/produit", ProduitController.cget);
router.post("/produit", ProduitController.post);

router.get("/produit/:id", ProduitController.get);
router.patch("/produit/:id", ProduitController.patch);
router.delete("/produit/:id", ProduitController.delete);

module.exports = router;