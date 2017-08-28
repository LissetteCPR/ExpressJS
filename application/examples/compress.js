const express = require('express');
const compression = require('compression');

let app = express()
    .use(compression())
    .use(express.static(__dirname + '/docs',{index: ['file.txt', 'file.txt']}))
    .listen(3000);

