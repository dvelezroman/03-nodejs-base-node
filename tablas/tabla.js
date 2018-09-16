const fs = require('fs');
const colors = require('colors');

const listarTabla = (base, limite) => {
    let data = '';
    for (let x = 1; x <= limite; x++) {
      data += `${base} * ${x} = ${base * x}\n`;
    };
    console.log(data.blue); 
  }

const generaTabla = (base, limite) => 
  new Promise((resolve, reject) => {
    let data = '';

    for (let x = 1; x <= limite; x++) {
      data += `${base} * ${x} = ${base * x}\n`;
    };

    fs.writeFile(`tablas/tabla_${base}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabla_${base}.txt`);
    })
  })

module.exports = {
  generaTabla,
  listarTabla
}