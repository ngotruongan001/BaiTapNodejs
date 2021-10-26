const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const feeSchema = mongoose.Schema(
  {
    maFee: {
      type: String,
      upperCase: true,
      required: true,
      unique: [true, "Ma Nhan Vien must be unique"]
    },
    price: {
      type: Number, 
      required: true,
    },
    description: {
      type: String, 
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
feeSchema.plugin(toJSON);
feeSchema.plugin(paginate);

feeSchema.pre('save', async function (next) {
  next();
});

/**
 * @typedef Fee
 */
 const Fee = mongoose.model('Fee', feeSchema);

 module.exports = Fee;
 