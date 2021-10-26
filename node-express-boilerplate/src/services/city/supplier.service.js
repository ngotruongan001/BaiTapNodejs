const { Supplier } = require('../../models');

/*
  * add Tinh
  * @param {*} data
  * @returns
*/

const addSupplier = async (data) => {
  const result = await Supplier.create(data);
  return result;
}

const querySuppliers = async () => {
  const suppliers = await Supplier.find();
  return suppliers;
};

// getSupplierById
const getSupplierById = async (id) => {
  return Supplier.findById(id);
};

//updateSupplierById
const updateSupplierById = async (supplierId, updateBody) => {
  // getDoiTuong
  const supplier = await getSupplierById(supplierId);

  if (!supplier) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  //sao chep qua
  Object.assign(supplier, updateBody);

  await supplier.save();
  return supplier;
};

//deleteSupplierById
const deleteSupplierById = async (supplierId) => {
  const supplier = await getSupplierById(supplierId);
  if (!supplier) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await supplier.remove();
  return supplier;
};



module.exports = {
  addSupplier,
  querySuppliers,
  getSupplierById,
  updateSupplierById,
  deleteSupplierById

}