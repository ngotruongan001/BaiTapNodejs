const httpStatus = require('http-status');
const { Categorie } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a categorie
 * @param {Object} categorieBody
 * @returns {Promise<Categorie>}
 */
 const createCategorie = async (categorieBody) => {
  return Categorie.create(categorieBody);
};

/**
 * Query for categories
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCategories = async (filter, options) => {
  const categories = await Categorie.paginate(filter, options);
  return categories;
};

/**
 * Get categorie by id
 * @param {ObjectId} id
 * @returns {Promise<Categorie>}
 */
const getCategorieById = async (id) => {
  return Categorie.findById(id);
};

/**
 * Update categorie by id
 * @param {ObjectId} categorieId
 * @param {Object} updateBody
 * @returns {Promise<Categorie>}
 */
const updateCategorieById = async (categorieId, updateBody) => {
  const categorie = await getCategorieById(categorieId);
  if (!categorie) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Categorie not found');
  }
  Object.assign(categorie, updateBody);
  await categorie.save();
  return categorie;
};

/**
 * Delete categorie by id
 * @param {ObjectId} categorieId
 * @returns {Promise<Categorie>}
 */
const deleteCategorieById = async (categorieId) => {
  const categorie = await getCategorieById(categorieId);
  if (!categorie) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Categorie not found');
  }
  await categorie.remove();
  return categorie;
};

module.exports = {
  createCategorie,
  queryCategories,
  getCategorieById,
  updateCategorieById,
  deleteCategorieById,
};
