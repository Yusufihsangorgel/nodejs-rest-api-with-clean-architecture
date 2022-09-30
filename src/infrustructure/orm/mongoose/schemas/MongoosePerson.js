const mongoose = require('../mongoose');

const personSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

module.exports = mongoose.model('person', personSchema);
