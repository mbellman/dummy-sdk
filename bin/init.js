#! /usr/bin/env node

const fs = require('fs');

const Paths = {
  BABEL_CONFIG: './babel.config.js',
  JEST_CONFIG: './jest.config.js',
  ESLINTRC: '.eslintrc'
};

const Content = {
  [Paths.BABEL_CONFIG]: `module.exports = require('dummy-sdk/babel.config');`,
  [Paths.JEST_CONFIG]: `module.exports = require('dummy-sdk/jest.config');`,
  [Paths.ESLINTRC]: `{ "extends": ["./node_modules/dummy-sdk/.eslintrc"] }`
};

function initializeFile(path) {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, Content[path]);
    console.log(`Wrote ${path}`);
  } else {
    console.log(`${path} already written!`);
  }
}

function main() {
  Object.keys(Paths).forEach(key => {
    initializeFile(Paths[key]);
  });
}

main();
