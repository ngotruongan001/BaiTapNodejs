const express = require('express');
const validate = require('../../../middlewares/validate');
const sizeValidation = require('../../../validations/product/size.validation');
const sizeController = require('../../../controllers/product/size.controller');

const router = express.Router();

router
.route('/')
.post(validate(sizeValidation.createSize), sizeController.createSize)
.get(validate(sizeValidation.getSizes), sizeController.getSizes);

router
.route('/:sizeId')
.get(validate(sizeValidation.getSize), sizeController.getSize)
.patch(validate(sizeValidation.updateSize), sizeController.updateSize)
.delete(validate(sizeValidation.deleteSize), sizeController.deleteSize);

module.exports = router;