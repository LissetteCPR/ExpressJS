const express = require('express');
const cookieParser = require('cookie-parser');

let app = express()
    .use(cookieParser())
    .use((req,res) => {
      if(req.cookies.name){
	console.log('name:', req.cookies.name);
      }
      else{
	res.cookie('name', 'foo');
      }
      res.end('Hello');
    })
    .listen(3000);
