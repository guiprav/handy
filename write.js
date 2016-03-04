#!/usr/bin/env node
'use strict';

let fs = require('fs');

let read = require('read-text-file-sync');

let peg = require('pegjs');

let parseCat = peg.buildParser(read(__dirname + '/cat.pegjs')).parse;

let oldSections = (function () {
    let oldPath = process.argv[2];

    if(!oldPath) {
        return null;
    }

    return parseCat(read(oldPath));
})();

let sections = parseCat(read('/dev/stdin'));

sections.forEach(function (section) {
    let oldSection = (oldSections || []).find(function (oldSection) {
        return oldSection.id === section.id;
    });

    if(
        !oldSection
        || oldSection.path !== section.path
        || oldSection.data !== section.data
    ) {
        fs.writeFileSync(section.path, section.data);

        if(oldSection && oldSection.path !== section.path) {
            fs.unlinkSync(oldSection.path);
        }
    }
});
