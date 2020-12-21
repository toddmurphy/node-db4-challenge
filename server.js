const express = require('express');
const recipeRouter = require('./api/recipeRouter');

const server = express();

server.use(express.json());

server.use('/api/recipes', recipeRouter);

//initial get to make sure working
server.get('/', (req, res) => {
  res.send(`<h2>Recipe api project working</h2>`);
});

module.exports = server;
