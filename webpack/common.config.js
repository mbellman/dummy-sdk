const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

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
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
};