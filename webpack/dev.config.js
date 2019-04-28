const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const commonConfig = require('./common.config');

module.exports = merge(commonConfig, {
	context: path.resolve(process.cwd()),
	mode: 'development',
	output: {
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './app/index.html'
		})
	],
	devServer: {
		contentBase: ['./dist', './app'],
		inline: true,
		hot: true
	}
});