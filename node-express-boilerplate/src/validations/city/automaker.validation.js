const Joi = require('joi');
const { password, objectId } = require('../custom.validation');

//{body,params, query}
const addAutomaker = {
  body: Joi.object().keys({
    dongXe: Joi.string().required(),
    hangXe: Joi.string().required(),
    soNguoi: Joi.number().integer().required() ,
  }),
};


const getAutomakers = {
  query: Joi.object().keys({
    maNhaCC: Joi.string(),
  }),
}

const getAutomaker = {
  params: Joi.object().keys({
    automakerId: Joi.string().custom(objectId),
  }),
};

// updateAutomaker
const updateAutomaker = {
  params: Joi.object().keys({
    automakerId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      hangXe: Joi.string(),
      soNguoi: Joi.number().integer(),
    })
    .min(1),
};

// deleteAutomaker
const deleteAutomaker = {
  params: Joi.object().keys({
    automakerId: Joi.string().custom(objectId),
  }),
};


module.exports = {
  addAutomaker,
  getAutomakers,
  getAutomaker,
  updateAutomaker,
  deleteAutomaker
};
