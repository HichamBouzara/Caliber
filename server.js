var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
var mongoose = require('mongoose');
var exphbs  = require('express3-handlebars');
var fs = require('fs');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(cookieParser('keyboard cat'));
app.use(session({ secret: 'keyboard cat', key: 'sid', cookie: { secure: false }}));
app.use(bodyParser());
 

// Connect to mongodb
var connect = function () {
  var options = { server: { socketOptions: { keepAlive: 1 } } }
  mongoose.connect('mongodb://localhost/etherpad-app', options)
}
connect()

// Error handler
mongoose.connection.on('error', function (err) {
  console.log(err)
})

// Reconnect when closed
mongoose.connection.on('disconnected', function () {
  connect()
})

// Bootstrap models
fs.readdirSync(__dirname + '/models').forEach(function (file) {
  if (~file.indexOf('.js')) require(__dirname + '/models/' + file)
})


require('./routes.js')(app);
 // http://cwbuecheler.com/web/tutorials/2014/restful-web-app-node-express-mongodb/ 
app.listen(4000, function(){
    console.log('Server running...');
});