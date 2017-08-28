const express = require('express');
const cookieParser = require('cookie-parser');

let app = express()
    .use(cookieParser('my super secret sign key'))
    .use('/toggle', (req, res) => {
      if(req.signedCookies.name){
	res.clearCookie('name');
	res.end('name cookie cleared:'+ req.signedCookies.name);
      }
      else{
	res.cookie('name', 'foo', {signed: true});
	res.end('name cookie set!');
      }
    })
    .listen(3000);
