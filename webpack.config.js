var webpack     = require('webpack')
var debug       = process.env.NODE_ENV !== 'production'
var path        = "./src/js/"
var plugins     = [ new webpack.optimize.CommonsChunkPlugin( 'commons') ]
var devplugins  = [ new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })]

module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : null,
  entry: {
    p1: path + "/pages/page1.js",
    p2: path + "/pages/page2.js"
  },
  output: {
    path : __dirname + '/dist',
    filename: "[name].chunk.js"
  },
  module: {
    loaders : [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: debug ? plugins : plugins.concat(devplugins)
}
