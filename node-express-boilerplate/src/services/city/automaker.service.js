const { Automaker } = require('../../models');

/*
  * add Tinh
  * @param {*} data
  * @returns
*/

const addAutomaker = async (data) => {
  const result = await Automaker.create(data);
  return result;
}

const queryAutomakers = async () => {
  const automakers = await Automaker.find();
  return automakers;
};

// getAutomakerById
const getAutomakerById = async (id) => {
  return Automaker.findById(id);
};

//updateAutomakerById
const updateAutomakerById = async (automakerId, updateBody) => {
  // getDoiTuong
  const automaker = await getAutomakerById(automakerId);

  if (!automaker) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  //sao chep qua
  Object.assign(automaker, updateBody);

  await automaker.save();
  return automaker;
};

//deleteAutomakerById
const deleteAutomakerById = async (automakerId) => {
  const automaker = await getAutomakerById(automakerId);
  if (!automaker) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await automaker.remove();
  return automaker;
};



module.exports = {
  addAutomaker,
  queryAutomakers,
  getAutomakerById,
  updateAutomakerById,
  deleteAutomakerById

}