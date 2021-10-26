const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const typeServiceSchema = mongoose.Schema(
  {
    maLoaiDV: {
      type: String,
      upperCase: true,
      required: true,
      unique: [true, "Ma Nhan Vien must be unique"]
    },
    tenLoaiDV: {
        type: String,
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
typeServiceSchema.plugin(toJSON);
typeServiceSchema.plugin(paginate);

typeServiceSchema.pre('save', async function (next) {
  next();
});

/**
 * @typedef TypeService
 */
 const TypeService = mongoose.model('TypeService', typeServiceSchema);

 module.exports = TypeService;
 