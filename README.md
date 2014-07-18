node-mozjpeg-bin
================

A node wrapper for mozjpeg binaries.

## Requirements

You need to be able to build mozjpeg in order to install mozjpeg-bin
(see the [build requirements](https://github.com/mozilla/mozjpeg/blob/master/BUILDING.txt)).

## Installation

```
npm install mozjpeg-bin
```

## Usage

```javascript
var execFile = require('child_process').execFile;

// Get the path for the jpegtran/cjpeg/djpeg binary
var jpegtran = require('mozjpeg-bin').jpegtran;
var cjpeg = require('mozjpeg-bin').cjpeg;
var djpeg = require('mozjpeg-bin').djpeg;

execFile(jpegtran, ['-outfile', outPath, path], function(err, stdout, stderr) {
  if (err) {
    // error
  }
  
  // do something...
});
```

## CLI

You can also use mozjpeg through CLI by using `mozjpeg-jpegtran`, `mozjpeg-cjpeg` or
`mozjpeg-djpeg` (use `npm install -g mozjpeg-bin` to make those globally available on your
system).

---

This module was inspired by [kevva/mozjpeg](https://github.com/kevva/mozjpeg).
