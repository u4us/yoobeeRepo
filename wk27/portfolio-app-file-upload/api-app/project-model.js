var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema(
  {
    id: Number,
    name: String,
    description: String,
    type_id: Number,
    // 4. schema entry, update project component
    photo: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', ProjectSchema);