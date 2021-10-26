const express = require('express');
const validate = require('../../../middlewares/validate');
const feeValidation = require('../../../validations/city/fee.validation');
const feeController = require('../../../controllers/city/fee.controller');

const router = express.Router();

router
  .route('/')
    .post(validate(feeValidation.addFee), feeController.addFee)
    .get(validate(feeValidation.getFees), feeController.getFees)

router
  .route('/:feeId')
    .get(validate(feeValidation.getFee), feeController.getFee)
    .patch(validate(feeValidation.updateFee), feeController.updateFee)
    .delete(validate(feeValidation.deleteFee), feeController.deleteFee);

module.exports = router;