const express = require('express');

let app = express()
    .use(express.static(__dirname + '/docs', {'index': ['file.txt', 'file.txt']}))
  .listen(3000);


/*const express = require('express');
const serveStatic = require('serve-static');

let app = express()
    .use(serveStatic(__dirname + '/docs'))
    .listen(3000);
*/
