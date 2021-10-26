const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const automakerSchema = mongoose.Schema(
  {
    dongXe: {
      type: String,
      upperCase: true,
      required: true,
      unique: [true, "dongXe must be unique"]
    },
    hangXe: {
      type: String, 
      required: true,
    },
    soNguoi: {
      type: Number, 
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
automakerSchema.plugin(toJSON);
automakerSchema.plugin(paginate);

automakerSchema.pre('save', async function (next) {
  next();
});

/**
 * @typedef Automaker
 */
 const Automaker = mongoose.model('Automaker', automakerSchema);

 module.exports = Automaker;
 