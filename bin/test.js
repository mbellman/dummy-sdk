#! /usr/bin/env node

const jest = require('jest');
const baseConfig = require('../jest.config');
const args = require('yargs').argv;

function getConfig() {
	return {
		...baseConfig,
		verbose: args.verbose || args.v,
		testRegex: `${args.match || args.m || ''}.*\.test\.js$`
	};
}

function main() {
	if (args.updateSnapshot || args.u) {
		jest.run('./tests/ -u');
	} else {
		jest.runCLI(getConfig(), [process.cwd()]);
	}
}

main();