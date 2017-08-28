const express = require('express');

let app = express()
    .use((req, res) => {
      console.log('header:', req.headers['cookie']);
      res.cookie('name', 'foo');
      res.end('hello');
    })
    .listen(3000);
