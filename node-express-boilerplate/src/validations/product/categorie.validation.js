const Joi = require('joi');
const { password, objectId } = require('../custom.validation');

const createCategorie = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getCategories = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getCategorie = {
  params: Joi.object().keys({
    categorieId: Joi.string().custom(objectId),
  }),
};

const updateCategorie = {
  params: Joi.object().keys({
    categorieId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
    })
    .min(1),
};

const deleteCategorie = {
  params: Joi.object().keys({
    categorieId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createCategorie,
  getCategories,
  getCategorie,
  updateCategorie,
  deleteCategorie,
};
