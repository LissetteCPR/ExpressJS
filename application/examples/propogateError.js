const express = require('express');
const timeout = require('connect-timeout');

let app = express()
    .use(timeout(5000))
    .use(function(req, res, next){
      // simulate database action takes 6s
      setTimeout(() => {
	next();
      }, 6000)
    })
    .use((req, res, next) =>{
      res.end('Done'); //ERROR
    })
    .listen(3000);

console.log('Running');
