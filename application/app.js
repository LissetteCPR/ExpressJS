//require module express
const express = require('express');

express()
  .use(express.static(__dirname + '/', {'index': ['index.html', 'index.html']}))
  .listen(3000);

console.log('server running');


