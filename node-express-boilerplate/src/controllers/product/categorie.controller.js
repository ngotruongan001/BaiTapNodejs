const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { categorieService } = require('../../services');

const createCategorie = catchAsync(async (req, res) => {
  const categorie = await categorieService.createCategorie(req.body);
  res.status(httpStatus.CREATED).send(categorie);
});

const getCategories = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await categorieService.queryCategories(filter, options);
  res.send(result);
});

const getCategorie = catchAsync(async (req, res) => {
  const categorie = await categorieService.getCategorieById(req.params.categorieId);
  if (!categorie) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Categorie not found');
  }
  res.send(categorie);
});

const updateCategorie = catchAsync(async (req, res) => {
  const categorie = await categorieService.updateCategorieById(req.params.categorieId, req.body);
  res.send(categorie);
});

const deleteCategorie = catchAsync(async (req, res) => {
  await categorieService.deleteCategorieById(req.params.categorieId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createCategorie,
  getCategories,
  getCategorie,
  updateCategorie,
  deleteCategorie,
};
