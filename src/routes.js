
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://megahack:megahack@cluster0-fe5hf.mongodb.net/megahack?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true});

const { Router } = require('express');
const routes = new Router();
const Quiz = require('./controller/Quiz');


routes.get('/gt', (req,res) => {
    
    return res.json({message:"ola mundo"})
});



routes.get('/Quiz', Quiz.index);
//routes.post('/Quiz', Quiz.store);


module.exports = routes;