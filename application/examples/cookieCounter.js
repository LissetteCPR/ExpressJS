const express = require('express');
const cookieSession = require('cookie-session');

let app = express()
    .use(cookieSession({
      keys:['my super secret sign key']
    }))
    .use('/home', (req, res) => {
      if(req.session.views){
	req.session.views++;
      }
      else{
	req.session.views = 1;
      }
      res.end('Total views:'+ req.session.views);
    })
    .use('/reset', (req, res) => {
      delete req.session.views;
      res.end('cleared all you views');
    })
    .listen(3000);
