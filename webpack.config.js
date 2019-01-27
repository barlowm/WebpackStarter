const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path");

module.exports = {
	entry: {
		filename: "./src/assets/scripts/index.js"    // JS file to be pushed to build folder.
	},

	output: {
		filename: "main.js",   // The JS file get"s renamed
		path: path.resolve(__dirname, "dist")
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader"
				]
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",   // Here"s the HTML file used as a template
			filename: "index.html"            // and pushed here, relative to root of the application
		}),
	]
}
