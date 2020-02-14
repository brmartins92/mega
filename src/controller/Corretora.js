const Corretora = require('../models/Corretora');
module.exports = {
  
  async index(request, response) {
    const corretoras = await Corretora.find({});
    return response.json(corretoras);
  },

  async store(request, response) {
    const { nome,registro,estado,cidade,regiao,email,senha } = request.body; 
  
    corretora = await Corretora.create({
      nome,
      registro,
      estado,
      cidade,
      regiao,
      email,
      senha
    });
    return response.json(corretora);
  }
  
  
};