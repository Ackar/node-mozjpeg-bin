'use strict';

var path = require('path');

var binPath = exports.binPath = path.join(__dirname, 'bin');

module.exports.jpegtran = binPath + '/jpegtran';
module.exports.cjpeg = binPath + '/cjpeg';
module.exports.djpeg = binPath + '/djpeg';
