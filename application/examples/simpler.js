const express = require('express');

express()
  .use(function(req, res, next){
    res.end('hello express!');
  })
  .listen(3000);

console.log('Running');
