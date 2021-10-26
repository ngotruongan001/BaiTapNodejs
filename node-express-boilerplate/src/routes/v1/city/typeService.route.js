const express = require('express');
const validate = require('../../../middlewares/validate');
const typeServiceValidation = require('../../../validations/city/typeService.validation');
const typeServiceController = require('../../../controllers/city/typeService.controller');

const router = express.Router();

router
  .route('/')
    .post(validate(typeServiceValidation.addTypeService), typeServiceController.addTypeService)
    .get(validate(typeServiceValidation.getTypeServices), typeServiceController.getTypeServices)

router
  .route('/:typeId')
  .get(validate(typeServiceValidation.getTypeService), typeServiceController.getTypeService)
  .patch(validate(typeServiceValidation.updateTypeService), typeServiceController.updateTypeService)
  .delete(validate(typeServiceValidation.deleteTypeService), typeServiceController.deleteTypeService);

module.exports = router;