#!/usr/bin/env node
'use strict';

let fs = require('fs');

let read = require('read-text-file-sync');

let peg = require('pegjs');

let parseCat = peg.buildParser(read(__dirname + '/cat.pegjs')).parse;

let sections = parseCat(read('/dev/stdin'));

sections.forEach(function (section) {
    fs.writeFileSync(section.name, section.data);
});
