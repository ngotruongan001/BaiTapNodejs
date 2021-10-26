const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const { typeService } = require('../../services');

const addTypeService = catchAsync(async (req, res) => {
  const type = await typeService.addTypeService(req.body);
  res.status(httpStatus.CREATED).send(type);
});

//getTypeServices
const getTypeServices = catchAsync(async (req, res) => {
  const result = await typeService.queryTypeServices();
  res.send(result);
});

//getTypeService
const getTypeService = catchAsync(async (req, res) => {
  const type = await typeService.getTypeServiceById(req.params.typeId);
  if (!type) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(type);
});


//updateTypeService
const updateTypeService = catchAsync(async (req, res) => {
  const type = await typeService.updateTypeServiceById(req.params.typeId, req.body);
  res.send(type);
});


//deleteTypeService
//deleteTypeService
const deleteTypeService = catchAsync(async (req, res) => {
  await typeService.deleteTypeServiceById(req.params.typeId);
  res.status(httpStatus.NO_CONTENT).send();
});




module.exports = {
  addTypeService,
  getTypeServices,
  getTypeService,
  updateTypeService,
  deleteTypeService
};
