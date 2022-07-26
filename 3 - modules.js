// Modules - Encapsulated code
// Every file is a module (by default)

const names = require('./4 - names.js');
const sayHi = require('./5-utils.js');

sayHi('susan');	
sayHi(names.john);
sayHi(names.peter);


const data = require('./6 - alternativeFlavor.js');
console.log(data)