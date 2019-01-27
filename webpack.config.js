const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    filename: './src/index.js'    // JS file to be pushed to build folder.
  },
  output: {
    filename: './main.js'   // The JS file get's renamed
  },

  plugins: [
    new HtmlWebpackPlugin({
		    template: './src/index.html',   // Here's the HTML file used as a template
        filename: 'index.html'            // and pushed here, relative to root of the application
    }),
  ]
}