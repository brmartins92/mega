const Corretora = require('../models/Corretora');
module.exports = {
  
  
  async show(request, response) {
    const { email,senha } = request.body;
    const resCorretora = await Corretora.find({ email: email, senha: senha })  ;
    return response.json(resCorretora);
  },
  
  
};

//edit
//show
//update
//index
//store