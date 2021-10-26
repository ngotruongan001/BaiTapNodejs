const { TypeService } = require('../../models');

const addTypeService = async (data) => {
    const result = await TypeService.create(data);
    return result;
}
const queryTypeServices = async () => {
    const type = await TypeService.find();
    return type;
}


// getTypeServiceById
const getTypeServiceById = async (id) => {
    return TypeService.findById(id);
};

//updateTypeServiceById
const updateTypeServiceById = async (typeId, updateBody) => {
    // getDoiTuong
    const type = await getTypeServiceById(typeId);
  
    if (!type) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
  
    //sao chep qua
    Object.assign(type, updateBody);
    await type.save();
    return type;
};

//deleteTypeServiceById
const deleteTypeServiceById = async (typeId) => {
    // getDoiTuong
    const type = await getTypeServiceById(typeId);
    return TypeService.deleteOne(type);
}
    
module.exports = {
    addTypeService,
    queryTypeServices,
    getTypeServiceById,
    updateTypeServiceById,
    deleteTypeServiceById
}