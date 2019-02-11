require("@babel/polyfill");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
	mode: "development",
	entry: [
		"@babel/polyfill",	// polyfill for MS-IE as per https://forum.vuejs.org/t/how-to-use-vue-with-internet-explorer-11/13315
		"./src/index.js"	// JS file that tells what needs to be loaded
	],

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "all_scripts.js",   // The combined JS in the ./dist folder
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				exclude: /node_modules/,
				loader: "vue-loader",
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
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
		new VueLoaderPlugin(),
	],

	devServer: {
		disableHostCheck: true		// Use to prevent the Invalid-Host-Header message in IE-11
	}
}
