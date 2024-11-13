// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Output file
  },
  mode: 'production', 
  devtool: 'source-map', // Enable source maps for easier debugging
};
