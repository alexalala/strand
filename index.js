var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();
app.use('/static', express.static('static'));
app.use('/images', express.static('images'));
app.use('/favicon', express.static('images'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('home');
});

app.listen(3000, function () {
  console.warn('Listening on port 3000, visit http://localhost:3000/');
});
