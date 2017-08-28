const express = require('express');
const timeout = require('connect-timeout');

let app = express()
    .use('/api', timeout(5000)
         ,(req, res, next) => {
	   //simulate a hanging request
	 }
	 ,(error, req, res, next) => {
	   if(req.timeout){
	     res.statusCode = 500;
	     res.end('Request timed out');
	   }
	   else {
	     next(error);
	   }
	 })
    .listen(3000);
