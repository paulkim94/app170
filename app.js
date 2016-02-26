
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var index2 = require('./routes/index2');

var transaction = require('./routes/transaction');
var analytics = require('./routes/analytics');
var setting = require('./routes/setting');
var splash = require('./routes/splash');
var aboutHelp = require('./routes/aboutHelp');
var closet = require('./routes/closet');
var shop = require('./routes/shop');
var login = require('./routes/login');
var setup = require('./routes/setup');

// added for redesign
var piggy = require('./routes/piggy');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', splash.view);
app.get('/dashboard', index.view);

app.get('/dashboard2', index2.view); // redesign dashboard page

app.get('/transaction', transaction.view);
app.get('/analytics', analytics.view);
app.get('/setting', setting.view);
app.get('/splash', splash.view);
app.get('/aboutHelp', aboutHelp.view);
app.get('/closet', closet.view);
app.get('/shop', shop.view);
app.get('/login', login.view);
app.get('/setup', setup.view);
app.get('/addTransaction', transaction.addTransaction);
app.get('/viewTransactions', transaction.viewTransactions);

app.get('/deleteTransactions', transaction.deleteTransactions);
app.post('/deleteTransactions', transaction.deleteTransactions);

app.get('/piggy', piggy.view);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
