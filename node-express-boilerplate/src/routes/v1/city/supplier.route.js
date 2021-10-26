const express = require('express');
const validate = require('../../../middlewares/validate');
const supplierValidation = require('../../../validations/city/supplier.validation');
const supplierController = require('../../../controllers/city/supplier.controller');

const router = express.Router();

router
  .route('/')
    .post(validate(supplierValidation.addSupplier), supplierController.addSupplier)
    .get(validate(supplierValidation.getSuppliers), supplierController.getSuppliers)

router
  .route('/:supplierId')
    .get(validate(supplierValidation.getSupplier), supplierController.getSupplier)
    .patch(validate(supplierValidation.updateSupplier), supplierController.updateSupplier)
    .delete(validate(supplierValidation.deleteSupplier), supplierController.deleteSupplier);

module.exports = router;