const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const supplierSchema = mongoose.Schema(
  {
    maNhaCC: {
      type: String,
      upperCase: true,
      required: true,
      unique: [true, "Ma Nhan Vien must be unique"]
    },
    tenNhaCC: {
      type: String, 
      required: true,
    },
    diaChi: {
      type: String,
      required: true,
    },
    soDT:{
      type: String,
      required: true,
      validate(value) {
        var phoneno = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if (!value.match(phoneno)) {
          throw new Error('not number phone');
        }
      },
    },
    maSoThue:{
      type: String,
      required: true,
      minlength: 6,
    } 
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
supplierSchema.plugin(toJSON);
supplierSchema.plugin(paginate);

supplierSchema.pre('save', async function (next) {
  next();
});

/**
 * @typedef Supplier
 */
 const Supplier = mongoose.model('Supplier', supplierSchema);

 module.exports = Supplier;
 