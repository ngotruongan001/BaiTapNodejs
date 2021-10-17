const Joi = require('joi');
const { password, objectId } = require('../custom.validation');

const createSize = {
  body: Joi.object().keys({
    sizeCode: Joi.string().required(),
    sortOther: Joi.string().required(),
  }),
};

const getSizes = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSize = {
  params: Joi.object().keys({
    sizeId: Joi.string().custom(objectId),
  }),
};

const updateSize = {
  params: Joi.object().keys({
    sizeId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      sizeCode: Joi.string(),
      sortOther: Joi.string(),
    })
    .min(1),
};

const deleteSize = {
  params: Joi.object().keys({
    sizeId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSize,
  getSizes,
  getSize,
  updateSize,
  deleteSize,
};
