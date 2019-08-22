var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema(
  {
    id: Number,
    name: String,
    description: String,

    //2. add type id
    type_id: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', ProjectSchema);