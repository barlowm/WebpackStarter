const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		filename: "./src/scripts/index.js"    // JS file that tells what needs to be loaded
	},

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "all_scripts.js",   // The combined JS in the ./dist folder
	},

	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader",
				],
			},
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",	// Here"s the HTML file used as a template
			filename: "index.html"			// and saved as this, relative to root of the application
		}),
		new MiniCssExtractPlugin({
			filename: "MyStyles.css",
		}),
	]
}
