const merge = require('webpack-merge');
const commonConfig = require('./common.config');

module.exports = merge(commonConfig, {
	mode: 'production',
	output: {
		filename: 'bundle.[contenthash].js'
	},
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM'
	}
});