const express = require('express');
const validate = require('../../../middlewares/validate');
const automakerValidation = require('../../../validations/city/automaker.validation');
const automakerController = require('../../../controllers/city/automaker.controller');

const router = express.Router();

router
  .route('/')
    .post(validate(automakerValidation.addAutomaker), automakerController.addAutomaker)
    .get(validate(automakerValidation.getAutomakers), automakerController.getAutomakers)

router
  .route('/:automakerId')
    .get(validate(automakerValidation.getAutomaker), automakerController.getAutomaker)
    .patch(validate(automakerValidation.updateAutomaker), automakerController.updateAutomaker)
    .delete(validate(automakerValidation.deleteAutomaker), automakerController.deleteAutomaker);

module.exports = router;