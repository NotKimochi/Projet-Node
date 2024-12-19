const { Router } = require("express");
const AnimalController = require("../controllers/categorie");

const router = new Router();

router.get("/categorie", categorieController.cget);
router.post("/categorie", categorieController.post);

router.get("/categorie/:id", categorieController.get);
router.patch("/categorie/:id", categorieController.patch);
router.delete("/categorie/:id", categorieController.delete);

module.exports = router;
