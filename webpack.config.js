const path = require('path');

module.exports = {
  entry:'./src/index.js',
  mode: 'development',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'public/js/dist'),
    publicPath: 'js/dist/'
  },
  devServer: {
        port: 8091,
        overlay: true,
        host: 'localhost',
        contentBase: path.resolve(__dirname, 'public')
    },

  // module: {
  //   rules: [{
  //     test: /\.js$/,
  //     loader: 'babel-loader',
  //     query: {
  //       presets: ['env']
  //     }
  //   }]
  // },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
