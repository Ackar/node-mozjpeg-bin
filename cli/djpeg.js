#!/usr/bin/env node

'use strict';

var djpeg = require('../index').djpeg.use();
var spawn = require('child_process').spawn;

spawn(djpeg, process.argv.slice(2), { stdio: 'inherit' })
     .on('exit', process.exit);
