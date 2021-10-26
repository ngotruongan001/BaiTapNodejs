const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const { supplierService } = require('../../services');

const addSupplier = catchAsync(async (req, res) => {
  const tinh = await supplierService.addSupplier(req.body);
  res.status(httpStatus.CREATED).send(tinh);
});

//getSuppliers
const getSuppliers = catchAsync(async (req, res) => {
  const result = await supplierService.querySuppliers();
  res.send(result);
});

//getSupplier
const getSupplier = catchAsync(async (req, res) => {
  const supplier = await supplierService.getSupplierById(req.params.supplierId);
  if (!supplier) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(supplier);
});

//updateSupplier
const updateSupplier = catchAsync(async (req, res) => {
  const supplier = await supplierService.updateSupplierById(req.params.supplierId, req.body);
  res.send(supplier);
});


//deleteSupplier
const deleteSupplier = catchAsync(async (req, res) => {
  await supplierService.deleteSupplierById(req.params.supplierId);
  res.status(httpStatus.NO_CONTENT).send();
});


module.exports = {
  addSupplier,
  getSuppliers,
  getSupplier,
  updateSupplier,
  deleteSupplier
};
