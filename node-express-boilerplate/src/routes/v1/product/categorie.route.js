const express = require('express');
const validate = require('../../../middlewares/validate');
const categorieValidation = require('../../../validations/product/categorie.validation');
const categorieController = require('../../../controllers/product/categorie.controller');

const router = express.Router();

router
.route('/')
.post(validate(categorieValidation.createCategorie), categorieController.createCategorie)
.get(validate(categorieValidation.getCategories), categorieController.getCategories);

router
.route('/:categorieId')
.get(validate(categorieValidation.getCategorie), categorieController.getCategorie)
.patch(validate(categorieValidation.updateCategorie), categorieController.updateCategorie)
.delete(validate(categorieValidation.deleteCategorie), categorieController.deleteCategorie);

module.exports = router;