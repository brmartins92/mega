  
const mongoose = require('mongoose');

const ImovelSchema = new mongoose.Schema({
  idCorretora: String,
  valor: String,
  tipoImovel:String,
  estado:String,
  cidade:String,
  regiao:String,
  nome:String,
  telefone:String,
  email:String,
  cpf:String,
  Fotos:Array,
});

module.exports = mongoose.model('Imovel', ImovelSchema);