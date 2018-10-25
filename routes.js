
var userController = require('./controller/user.js');

module.exports = function(app){

	app.get('/users', userController.list);
	app.post('/users', userController.create);
	app.get('/users/:id', userController.read);
	app.put('/users/:id', userController.update);
	app.delete('/users/:id', userController.delete);


}