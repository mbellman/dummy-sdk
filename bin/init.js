#! /usr/bin/env node

const fs = require('fs');

const Paths = {
  BABEL_CONFIG: './babel.config.js',
  JEST_CONFIG: './jest.config.js',
  ESLINTRC: '.eslintrc',
  SRC_INDEX: './src/index.js',
  APP_HTML: './app/index.html'
};

const Content = {
  [Paths.BABEL_CONFIG]: `module.exports = require('dummy-sdk/babel.config');`,
  [Paths.JEST_CONFIG]: `module.exports = require('dummy-sdk/jest.config');`,
  [Paths.ESLINTRC]: `{ "extends": ["./node_modules/dummy-sdk/.eslintrc"] }`,
  [Paths.SRC_INDEX]: `import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(...);
`,
  [Paths.APP_HTML]: `<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body></body>
</html>`
};

function ensurePathDirectoryExists(path) {
  const parts = path.split('/');

  if (parts.length > 1) {
    const directory = parts
      .slice(0, -1)
      .filter(subdirectory => subdirectory !== '.')
      .join('/');

    if (directory.length > 0 && !fs.existsSync(directory)) {
      fs.mkdirSync(directory);
    }
  }
}

function initializeFile(path) {
  if (!fs.existsSync(path)) {
    ensurePathDirectoryExists(path);

    fs.writeFileSync(path, Content[path]);

    console.log(`Wrote ${path}!`);
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
