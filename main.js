const saludo = require('./modules/saludo');
const despedida = require('./modules/despedida');
const brindarDatoCurioso = require('./modules/datoCurioso');
const nombre = process.argv[2]

saludo(nombre);
console.log("Te comparto un dato curioso:");
brindarDatoCurioso();
despedida(nombre);
