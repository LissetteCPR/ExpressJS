const express = require('express');
const bodyParser = require('body-parser');

let app = express()
    .use(bodyParser())
    .use((req, res) => {
      if(req.body.foo){
	res.end('Body parsed!');
      }
      else{
	res.end('Body does not have foo');
      }
    })
    .use((err, req, res, next) => {
      res.end('Invalid body');
    })
    .listen(3000);
