  
const mongoose = require('mongoose');

const CorretoraSchema = new mongoose.Schema({
  nome: String,
});

module.exports = mongoose.model('Corretora', CorretoraSchema);