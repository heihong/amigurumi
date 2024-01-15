const mongoose = require('mongoose');

const patternSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Pattern', patternSchema);