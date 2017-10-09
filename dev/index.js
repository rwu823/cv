const express = require('express');
const c = require('chalk');
const pkg = require('../package');

const app = express();
const replaceBeforeSpaces = (str) => str.replace(/^\s*/gm, '');
const cfgs = require('./cfgs')

app.use(cfgs.ghPrefix, express.static(cfgs.staticDir))
  .listen(cfgs.port, () => {
    const log = replaceBeforeSpaces(`
      📦  ${c.yellowBright(pkg.name)} ${pkg.version}
      🌎  Server is listening on ${c.magentaBright.underline(`http://localhost:${cfgs.port}${cfgs.ghPrefix}`)} 
      ⚡  ${c.bgGreen.white(` ⬢ ${process.version} `)}
      📁  Static dir ${cfgs.staticDir}
    `);

    console.log(log);
  });