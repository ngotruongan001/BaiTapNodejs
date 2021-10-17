const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('../plugins');

const categorieSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
categorieSchema.plugin(toJSON);
categorieSchema.plugin(paginate);

/**
 * @typedef categorie
 */
const categorie = mongoose.model('categorie', categorieSchema);

module.exports = categorie;
