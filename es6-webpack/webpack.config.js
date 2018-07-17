var path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    "babel-polyfill",
    path.join(__dirname, './src/main.es6')
  ],
  output: {
    path: path.join(__dirname, './bundle'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname , 'src'),
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}