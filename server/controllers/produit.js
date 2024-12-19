const Produit = require("../models/produit");

exports.cget = async (req, resp, next) => {
  resp.json(await Produit.findAll());
};

exports.post = async (req, res, next) => {
  try {
    res.status(201).json(await Produit.create(req.body));
  } catch (error) {
    next(error);
  }
};

exports.patch = async (req, res, next) => {
  try {
    const [nbUpdate] = await Produit.update(req.body, {
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (nbUpdate === 0) {
      return res.sendStatus(404);
    } else {
      res.json(await Produit.findByPk(parseInt(req.params.id)));
    }
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  const nbDeleted = await Produit.destroy({
    where: {
      id: parseInt(req.params.id),
    },
  });

  res.sendStatus(nbDeleted ? 204 : 404);
};

exports.get = async (req, res, next) => {
  const produit = await Produit.findByPk(parseInt(req.params.id));

  res.status(produit ? 200 : 404).json(produit);
};
