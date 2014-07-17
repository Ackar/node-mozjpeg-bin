'use strict';

var BinBuild = require('bin-build');
var chalk = require('chalk');
var mozjpeg = require('./index');

var builder = new BinBuild()
    .src('https://github.com/mozilla/mozjpeg/archive/v2.0.tar.gz')
    .cfg('autoreconf -fiv && ./configure --prefix="' + mozjpeg.jpegtran.dest()
         + '" --bindir="' + mozjpeg.jpegtran.dest() + '" --libdir="' + mozjpeg.jpegtran.dest()
         + '"')
    .make('make install');

console.log("Building mozjpeg...");

return builder.build(function (err) {
    if (err) {
        console.log(chalk.red('✗ ' + err));
        process.exit(1);
    }

    console.log(chalk.green('✓ mozjpeg built successfully'));
    process.exit(0);
});
