const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const { automakerService } = require('../../services');

const addAutomaker = catchAsync(async (req, res) => {
  const tinh = await automakerService.addAutomaker(req.body);
  res.status(httpStatus.CREATED).send(tinh);
});

//getAutomakers
const getAutomakers = catchAsync(async (req, res) => {
  const result = await automakerService.queryAutomakers();
  res.send(result);
});

//getAutomaker
const getAutomaker = catchAsync(async (req, res) => {
  const automaker = await automakerService.getAutomakerById(req.params.automakerId);
  if (!automaker) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(automaker);
});

//updateAutomaker
const updateAutomaker = catchAsync(async (req, res) => {
  const automaker = await automakerService.updateAutomakerById(req.params.automakerId, req.body);
  res.send(automaker);
});


//deleteAutomaker
const deleteAutomaker = catchAsync(async (req, res) => {
  await automakerService.deleteAutomakerById(req.params.automakerId);
  res.status(httpStatus.NO_CONTENT).send();
});


module.exports = {
  addAutomaker,
  getAutomakers,
  getAutomaker,
  updateAutomaker,
  deleteAutomaker
};
