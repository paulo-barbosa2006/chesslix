const path = require('path');
const postcssImport = require('postcss-import');

module.exports = {
  entry: { // entrada
    index: './src/index.js',		
  },

  mode: 'development', // development ou production
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'style-loader', // Carrega o CSS gerado como <style> tags no DOM  
        'css-loader', // Traduz CSS para módulos JavaScript
        'sass-loader' // Compila o SCSS para CSS
      ]
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [postcssImport()],
            },
          },
        },
      ],
    },
    {
      test: /\.js$/,
      use: ['babel-loader']
    }
    ],
  },

  output: { // saida
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'
  },
};
