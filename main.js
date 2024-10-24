const saludo = require('./modules/saludo');
const despedida = require('./modules/despedida');
const brindarDatoCurioso = require('./modules/datoCurioso');
// const nombre = process.argv[2]

var prompt = require('prompt-sync')({
    sigint: true
  });

const nombre = prompt("Dime cual es tu nombre?");
saludo(nombre);
console.log("Te comparto un dato curioso:");
brindarDatoCurioso();
despedida(nombre);
