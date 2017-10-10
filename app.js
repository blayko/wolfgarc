console.log('HOLA MUNDO');
var nombre="fuck";
var nombre2="you";

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World and also your mom!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})