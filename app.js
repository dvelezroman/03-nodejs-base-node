const colors = require('colors');
const argv = require('./config/yargs').argv;
const { generaTabla, listarTabla } = require('./tablas/tabla');
let comando = argv._[0];
switch (comando) {
  case 'list': {
    listarTabla(argv.base, argv.limite);
    break;
  }
  case 'create': {
    generaTabla(argv.base, argv.limite)
    .then(fileName => console.log(`El archivo ${fileName} se creó con exito`.green))
    .catch(err => console.log(`El archivo no se creó...!: ${err}`.colors.red));
    break;
  }
  default: console.log('error in commnand...');
}

// node app.js -b=4 -l=20

