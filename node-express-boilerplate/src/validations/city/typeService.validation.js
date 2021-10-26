const Joi = require('joi');
const { password, objectId } = require('../custom.validation');

//{body,params, query}
const addTypeService = {
  body: Joi.object().keys({
    maLoaiDV: Joi.string().required(),
    tenLoaiDV: Joi.string().required(),
  }),
};

const getTypeServices = {
  query: Joi.object().keys({
    maLoaiDV: Joi.string(),
  }),
}

const getTypeService = {
  params: Joi.object().keys({
    typeId: Joi.string().custom(objectId),
  }),
};
//updateTypeService
const updateTypeService = {
  params: Joi.object().keys({
    typeId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      tenLoaiDV: Joi.string(),
    })
    .min(1),
}

// deleteTypeService
const deleteTypeService = {
  params: Joi.object().keys({
    typeId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  addTypeService,
  getTypeServices,
  getTypeService,
  updateTypeService,
  deleteTypeService
}