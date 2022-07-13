const path = require('path');

module.exports = {
    // entry : './src/index.js'  // Este es el por defecto no hay que indicarlo
    output: {// Si quiero cambiar donde va ha estar la salida
        path: path.resolve(__dirname, 'build')  // __dirname es una variable de node
    }
}