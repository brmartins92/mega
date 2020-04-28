  
const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  nome:String,
  email:String,
  objQuiz:Object,
  peril:String
});

module.exports = mongoose.model('Quiz', QuizSchema);