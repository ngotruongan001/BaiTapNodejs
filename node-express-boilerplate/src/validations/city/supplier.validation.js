const Joi = require('joi');
const { password, objectId } = require('../custom.validation');

//{body,params, query}
const addSupplier = {
  body: Joi.object().keys({
    maNhaCC: Joi.string().required(),
    tenNhaCC: Joi.string().required(),
    diaChi: Joi.string().required(),
    soDT: Joi.string().required(),
    maSoThue: Joi.string().optional(),
  }),
};


const getSuppliers = {
  query: Joi.object().keys({
    maNhaCC: Joi.string(),
  }),
}

const getSupplier = {
  params: Joi.object().keys({
    supplierId: Joi.string().custom(objectId),
  }),
};

// updateSupplier
const updateSupplier = {
  params: Joi.object().keys({
    supplierId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      tenNhaCC: Joi.string(),
      diaChi: Joi.string(),
      soDT: Joi.string(),
      maSoThue: Joi.string(),
    })
    .min(1),
};

// deleteSupplier
const deleteSupplier = {
  params: Joi.object().keys({
    supplierId: Joi.string().custom(objectId),
  }),
};


module.exports = {
  addSupplier,
  getSuppliers,
  getSupplier,
  updateSupplier,
  deleteSupplier
};
