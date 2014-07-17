#!/usr/bin/env node

'use strict';

var cjpeg = require('../index').cjpeg.use();
var spawn = require('child_process').spawn;

spawn(cjpeg, process.argv.slice(2), { stdio: 'inherit' })
     .on('exit', process.exit);
