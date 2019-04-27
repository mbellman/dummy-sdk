const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const PROJECT_ROOT = path.resolve('./');

module.exports = ({
	mode = 'production',
	devtool = 'none',
	filename = 'bundle.[contenthash].js'
} = {}) => ({
	mode,
	devtool,
	entry: path.resolve(PROJECT_ROOT, './src/index.js'),
	output: {
		filename,
		publicPath: '/dist'
	},
	plugins: [
		new FriendlyErrorsWebpackPlugin({
			clearConsole: false
		})
	],
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react']
					}
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
});