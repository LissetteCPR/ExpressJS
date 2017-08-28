const express = require('express');
const timeout = require('connect-timeout');

let app = express()
    .use('/api', timeout(5000),
	 (req, res, next) => {
	   //simulate a hanging request
	 })
    .listen(3000);
