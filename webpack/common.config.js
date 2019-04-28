const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const babelConfig = require('../babel.config');

module.exports = {
	devtool: 'none',
	entry: {
		app: [path.resolve(process.cwd(), './src/index.js')]
	},
	output: {
		path: path.resolve(process.cwd(), './dist')
	},
	plugins: [
		new FriendlyErrorsWebpackPlugin({
			clearConsole: false
		})
	],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						...babelConfig
					}
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
};