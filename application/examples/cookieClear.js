const express = require('express');
const cookieParser = require('cookie-parser');

let app = express()
    .use(cookieParser())
    .use('/toggle',(req, res) =>{
      if (req.cookies.name){
	res.clearCookie('name');
	res.end('name cookie cleared');
      }
      else {
	res.cookie('name', 'foo');
	res.end('name cookie set');
      }
    })
    .listen(3000);
