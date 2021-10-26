const Joi = require('joi');
const { password, objectId } = require('../custom.validation');

//{body,params, query}
const addFee = {
  body: Joi.object().keys({
    maFee: Joi.string().required(),
    price: Joi.number().integer().required(),
    description: Joi.string().required(),
  }),
};


const getFees = {
  query: Joi.object().keys({
    maNhaCC: Joi.string(),
  }),
}

const getFee = {
  params: Joi.object().keys({
    feeId: Joi.string().custom(objectId),
  }),
};

// updateFee
const updateFee = {
  params: Joi.object().keys({
    feeId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      price: Joi.number().integer(),
      description: Joi.string(),
    })
    .min(1),
};

// deleteFee
const deleteFee = {
  params: Joi.object().keys({
    feeId: Joi.string().custom(objectId),
  }),
};


module.exports = {
  addFee,
  getFees,
  getFee,
  updateFee,
  deleteFee
};
