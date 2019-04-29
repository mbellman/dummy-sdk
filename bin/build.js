#! /usr/bin/env node

const webpack = require('webpack');

function getWebpackConfig(mode) {
  switch (mode) {
  case 'dev':
    return require('../webpack/dev.config');
  case 'prod':
  default:
    return require('../webpack/prod.config');
  }
}

function main(args) {
  const [ process, file, mode ] = args;
  const compiler = webpack(getWebpackConfig(mode));

  compiler.run((err, stats) => {
    if (!stats.hasErrors()) {
      const { assets } = stats.toJson();

      Object.keys(assets).forEach(key => {
        const asset = assets[key];

        console.log(`${asset.name}: ${asset.size / 1000}KB`);
      });
    }
  });
}

main(process.argv);
