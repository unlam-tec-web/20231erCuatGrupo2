const rutas = require('express').Router()

//asignamos todas las rutas
rutas.get('/', function (req, res){
  res.send('hola desde rutas/inicio')
})

module.exports= rutas;
