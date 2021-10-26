const { Fee } = require('../../models');

/*
  * add Tinh
  * @param {*} data
  * @returns
*/

const addFee = async (data) => {
  const result = await Fee.create(data);
  return result;
}

const queryFees = async () => {
  const fees = await Fee.find();
  return fees;
};

// getFeeById
const getFeeById = async (id) => {
  return Fee.findById(id);
};

//updateFeeById
const updateFeeById = async (feeId, updateBody) => {
  // getDoiTuong
  const fee = await getFeeById(feeId);

  if (!fee) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  //sao chep qua
  Object.assign(fee, updateBody);

  await fee.save();
  return fee;
};

//deleteFeeById
const deleteFeeById = async (feeId) => {
  const fee = await getFeeById(feeId);
  if (!fee) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await fee.remove();
  return fee;
};



module.exports = {
  addFee,
  queryFees,
  getFeeById,
  updateFeeById,
  deleteFeeById

}