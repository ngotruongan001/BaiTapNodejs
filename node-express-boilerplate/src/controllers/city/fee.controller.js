const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const { feeService } = require('../../services');

const addFee = catchAsync(async (req, res) => {
  const tinh = await feeService.addFee(req.body);
  res.status(httpStatus.CREATED).send(tinh);
});

//getFees
const getFees = catchAsync(async (req, res) => {
  const result = await feeService.queryFees();
  res.send(result);
});

//getFee
const getFee = catchAsync(async (req, res) => {
  const fee = await feeService.getFeeById(req.params.feeId);
  if (!fee) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(fee);
});

//updateFee
const updateFee = catchAsync(async (req, res) => {
  const fee = await feeService.updateFeeById(req.params.feeId, req.body);
  res.send(fee);
});


//deleteFee
const deleteFee = catchAsync(async (req, res) => {
  await feeService.deleteFeeById(req.params.feeId);
  res.status(httpStatus.NO_CONTENT).send();
});


module.exports = {
  addFee,
  getFees,
  getFee,
  updateFee,
  deleteFee
};
