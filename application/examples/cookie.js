const express = require('express');

let app = express()
    .use ((req, res) => {
      res.cookie('name', 'foo');
      res.end('Hello');
    })
    .listen(3000);
