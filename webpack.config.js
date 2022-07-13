const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const rulesForStyles = {
  test: /\.css$/,
  use: [
    'style-loader', 'css-loader' // El primero entiende el css y lo importa, mientras el segundo resulve los import (imagenes, background-image: url('...), require
  ] 
}
const rulesForJavascript = {
  test: /\.js$/,
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-react', // configuracion preestablecidad para convertir jsx en js vanila
        {
            runtime: 'automatic' // classic, no es necesario el import react
        }
      ]
    ]   
  }
};
const rules = [ rulesForJavascript, rulesForStyles ];

module.exports = (env, argv) => {

  const {mode} = argv;
  const isProduction = mode === 'production';

  return {
    // entry : './src/index.js'  // Este es el por defecto no hay que indicarlo
    output: {// Si quiero cambiar donde va ha estar la salida
      filename: isProduction
        ? '[name].[contenthash].js'
        : 'main.js',
      path: path.resolve(__dirname, 'build')  // __dirname es una variable de node
    },
    plugins: [
      new HtmlWebpackPlugin({template: 'src/index.html'})
    ],
    module: { rules },
    devServer: {
      open: true,  // Abre el navegador automaticamente
      port: 3000,
      compress: true  // Compresión en gzip
    },
    devtool: 'source-map' // Hay más alternativas en webpack.js.org/configuration/devtool
  }
}