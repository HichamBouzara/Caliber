var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
var mongoose = require('mongoose');
var fs = require('fs');

app.set('views', __dirname + '/views');
app.set('view engine', 'pug')

app.use(cookieParser('keyboard cat'));
app.use(session({ secret: 'keyboard cat', key: 'sid', cookie: { secure: false }}));
app.use(bodyParser());

app.use(express.static(__dirname + '/public'));


// Connect to mongodb
var connect = function () {
  var options = { server: { socketOptions: { keepAlive: 1 } } }
  mongoose.connect('mongodb://localhost/devfest', options)
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