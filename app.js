const express = require('express'),
      path = require('path'),
      routes = require('./routes');

const app = express();

//config
app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);

//calling to homepage
app.get('/', (req, res) => {
    res.render('index');
});

//routers
app.use('/', routes);

app.listen(app.get('port'), () => {
  console.log('Server started port ' + app.get('port'));
});



