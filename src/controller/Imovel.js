const Imovel = require('../models/Imovel');
module.exports = {
  
  async index(request, response) {
    const Imoveis = await Imovel.find({});
    return response.json(Imoveis);
  },

  async store(request, response) {
    const { nome,registro,estado,cidade,regiao,email,senha } = request.body;
    const imovel = await Imovel.create({
      idCorretora,
      valor ,
      tipoImovel,
      estado,
      cidade,
      regiao,
      nome,
      telefone,
      email,
      cpf,
      Fotos,
    });
    return response.json(imovel);
  }
  
  
};