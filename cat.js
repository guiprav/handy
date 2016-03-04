#!/usr/bin/env node
'use strict';

let fs = require('fs');

let read = require('read-text-file-sync');

process.argv.slice(2).forEach(function (path, i, paths) {
    let last = (i === paths.length - 1);

    let head = '-%- ' + path + ' -%-\n\n';

    let body = fs.existsSync(path)? read(path) : '';

    let tail = !last? '\n' : '';

    process.stdout.write(head + body + tail);
});
