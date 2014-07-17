'use strict';

var BinWrapper = require('bin-wrapper');
var path = require('path');
var execFile = require('child_process').execFile;

var jpegtran = module.exports.jpegtran = new BinWrapper({ global: false })
    .dest(path.join(__dirname, 'vendor'))
    .use('jpegtran');

var cjpeg = module.exports.cjpeg = new BinWrapper({ global: false })
    .dest(path.join(__dirname, 'vendor'))
    .use('cjpeg');

var djpeg = module.exports.djpeg = new BinWrapper({ global: false })
    .dest(path.join(__dirname, 'vendor'))
    .use('djpeg');
