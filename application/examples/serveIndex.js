const express = require('express');
const serveIndex = require('serve-index');

let app = express()
    .use(express.static(__dirname + '/docs'))
    .use(serveIndex(__dirname + '/docs'))
    .listen(3000);
