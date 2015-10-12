var compression = require('compression');
var morgan = require('morgan');
var express = require('express');

var app = express();
app.use(morgan('dev'));
app.use(compression());
app.use(express.static(__dirname + '/dist'));

// redirect requests that don't start with '/#!/'
app.get(/^(?!\/#!\/)/, function(req, res) {
  console.error('error 404: ' + req.url);
  res.redirect('/#!/404');
});

app.listen(process.env.PORT || 5000);
