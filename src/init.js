'use strict';

const fs = require('fs');

const projectDirectory = process.cwd();
let projectConfiguration;

/**
 * Processes the `localcms` configuration file on the user' project
 * @param {Object} err The title of the book.
 * @param {string} data The author of the book.
 * @returns {string} data The author of the book.
 */
function processFile(err, data) {
    if (err) { return console.error(err); }

    projectConfiguration = JSON.parse(data);

    return console.log('🎉', projectConfiguration);
}

fs.readFile(`${projectDirectory}/.localcms.json`, 'utf8', processFile);
