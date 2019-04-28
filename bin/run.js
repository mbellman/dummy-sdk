#! /usr/bin/env node

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack/dev.config');

WebpackDevServer.addDevServerEntrypoints(webpackConfig, webpackConfig.devServer);

const webpackCompiler = webpack(webpackConfig);
const server = new WebpackDevServer(webpackCompiler, webpackConfig.devServer);

server.listen(3000, 'localhost', () => {
	webpackCompiler.hooks.done.tap('done', () => {
		setTimeout(() => console.log('\nServing app at: http://localhost:3000'), 100);
	});
});