var compression = require('compression');
var morgan = require('morgan');
var express = require('express');

var app = express();
app.use(morgan('dev'));
app.use(compression());
app.use(express.static(__dirname + '/dist'));

// redirect requests that don't start with '/#!/'
app.get(/^(?!\/#!\/)/, function(req, res) {
  console.error('ERROR: ' + req.url);
  res.redirect('/#!/error');
});

app.listen(process.env.PORT || 5000);
