
var defaultController = require('./controller/default.js');

var secure = function(req, res, next){
	if (req.session.user) {
	    next();
	  } else {
	    req.session.error = 'Access denied!';
	    res.redirect('/login');
	  }
}

module.exports = function(app){

	app.get('/', defaultController.index);
	app.all('/register', defaultController.register);

	app.all('/login', defaultController.login);
	app.get('/logout', secure, defaultController.logout);

	app.get('/restricted', secure, function(req, res){
		res.send('restricted');
	});

}

