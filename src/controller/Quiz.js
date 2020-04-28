const Quiz = require('../models/Quiz');
module.exports = {
  
  async index(request, response) {
    const Quizes = await Quiz.find({});
    return response.json(Quizes);
   
    /*
    let obj = {
      "Nome":"nome",
      "email":"email@",
      "objQuiz": 
      [{pergunta: "aaaaa" , resposta1:"respota1", resposta2:"respota2",resposta3:"respota3",resposta4:"respota4"},
      {pergunta: "aaaaa" , resposta1:"respota1", resposta2:"respota2",resposta3:"respota3",resposta4:"respota4"}]
    }
    return response.json(obj);
    */
  },
  
  
  async store(request, response) {

    const { nome,email,objQuiz,perfil } = request.body;
   
    /*
    obj = {
      perfil: "perfil",
      "Nome":"nome",
      "email":"email@",
      "objQuiz": 
      [{pergunta: "aaaaa" , resposta1:"respota1", resposta2:"respota2",resposta3:"respota3",resposta4:"respota4"},
      {pergunta: "aaaaa" , resposta1:"respota1", resposta2:"respota2",resposta3:"respota3",resposta4:"respota4"}]
    }
    */
    //map das perguntas enviadas
    const Quizes = await Quiz.create({
      nome,
      email,
      objQuiz,
      perfil,
    });
    return response.json(Quizes);
  }
  
  
};