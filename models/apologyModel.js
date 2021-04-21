var mongoose = require('mongoose');

var apologySchema = mongoose.Schema({
  vip: { type: Boolean, required: true },
  delay: { type: Number, required: true },
  message: { type: String, required: true },
  create_date: {type: Date, default: Date.now },
  update_date: { type: Date }
});

// Export Apology model
var Apology = module.exports = mongoose.model('apology', apologySchema)
