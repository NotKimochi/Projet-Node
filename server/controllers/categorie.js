const Categorie = require("../models/categorie");

exports.cget = async (req, res, next) => {
  try {
    const categories = await Categorie.findAll();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

exports.get = async (req, res, next) => {
  try {
    const categorie = await Categorie.findByPk(req.params.id);
    if (!categorie) return res.sendStatus(404);
    res.json(categorie);
  } catch (error) {
    next(error);
  }
};

exports.post = async (req, res, next) => {
  try {
    const newCategorie = await Categorie.create(req.body);
    res.status(201).json(newCategorie);
  } catch (error) {
    next(error);
  }
};

exports.patch = async (req, res, next) => {
  try {
    const [updatedCount] = await Categorie.update(req.body, {
      where: { id: req.params.id },
      individualHooks: true,
    });

    if (updatedCount === 0) return res.sendStatus(404);

    const updatedCategorie = await Categorie.findByPk(req.params.id);
    res.json(updatedCategorie);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const deletedCount = await Categorie.destroy({ where: { id: req.params.id } });
    if (deletedCount === 0) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};