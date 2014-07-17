#!/usr/bin/env node

'use strict';

var jpegtran = require('../index').jpegtran.use();
var spawn = require('child_process').spawn;

spawn(jpegtran, process.argv.slice(2), { stdio: 'inherit' })
     .on('exit', process.exit);
