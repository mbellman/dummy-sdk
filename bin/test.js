#! /usr/bin/env node

const jest = require('jest');

function getDefaultArgs() {
	return '--config jest.config.js';
}

function main(args) {
	const [ process, file, ...jestArgs ] = args;

	jest.run([getDefaultArgs(), ...jestArgs].join(' '));
}

main(process.argv);