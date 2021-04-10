
const webpack = require('webpack');
const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require("vue-loader");

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
	entry: './main.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'js/bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: {
					loader: 'vue-loader',
					options: {
						loaders: {
							scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
						},
						extractCSS: true,
						hotReload: !prod,
					},
				},
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
			},
			{
				test: /\.scss$/i,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false,
						},
					},
					{
						loader: 'sass-loader',
						options: {},
					},
				],
			},
		],
	},
	plugins: [
		new webpack.IgnorePlugin({
			resourceRegExp: /^\.\/locale$/,
			contextRegExp: /moment$/,
		}),
		// new webpack.DefinePlugin({
		// 	__VUE_OPTIONS_API__: true,
		// 	__VUE_PROD_DEVTOOLS__: false,
		// }),
		new MiniCssExtractPlugin({
			filename: 'css/bundle.css',
		}),
		new VueLoaderPlugin(),
	],
}
