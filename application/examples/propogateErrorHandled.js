const express = require('express');
const timeout = require('connect-timeout');

let app = express()
    .use(timeout(1000))
    .use(function (req, res, next){
      //simulate databse action that takes 2s
      setTimeout(function(){
	next();
      }, 2000)
    })
    .use(haltOnTimedout)
    .use(function(req, res, next) {
      res.end('Done'); //will never get called
    })
    .listen(3000);

function haltOnTimedout(req, res, next){
  if (!req.timeout) next();
}
