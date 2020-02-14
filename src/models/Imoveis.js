  
const mongoose = require('mongoose');

const CorretoraSchema = new mongoose.Schema({
  nome: String,
  registro:String,
  estado:String,
  cidade:String,
  regiao:String,
  email:String,
  senha:String
});

module.exports = mongoose.model('Corretora', CorretoraSchema);