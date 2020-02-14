
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://megahack:megahack@cluster0-fe5hf.mongodb.net/megahack?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true});

const { Router } = require('express');
const routes = new Router();
const Corretora = require('./controller/Corretora');
const Logar = require('./controller/Logar');

routes.get('/gt', (req,res) => {
   
    return res.json({message:"ola mundo"})
});

routes.post('/brokers', (req,res) => {
    return res.json({message:"Hello Woaaaaaaarld"})
});

routes.get('/corretora', Corretora.index);
routes.post('/corretora', Corretora.store);

routes.post('/logar', Logar.show);

module.exports = routes;