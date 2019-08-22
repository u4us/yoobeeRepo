var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 1. add type collection to db, add type_id to projects + add type-model

var TypeSchema = new Schema(
  {
    id: Number,
    name: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Type', TypeSchema);