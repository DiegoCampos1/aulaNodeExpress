const express = require('express');

const server = express();

const usuarios = [
  { id: 1, nome: 'Diego', sobrenome: 'Campos' },
  { id: 2, nome: 'Coragem', sobrenome: 'Covarde' },
];

server.get('/usuarios', (req, res) => {
  res.send(usuarios);
});

server.get('/usuarios/:id', (req, res) => {
  const {id} = req.params

  const aux = usuarios.find((usuario) => usuario.id == id)

  res.send(aux);
});

console.log('O servidor esta rodando');

server.listen(3000);
