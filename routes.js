
var adherentController = require('./controller/adherent.js');

module.exports = function(app){

	app.get('/adherents', adherentController.list);
	app.post('/adherents', adherentController.create);
	app.get('/adherents/:id', adherentController.read);
	app.put('/adherents/:id', adherentController.update);
	app.delete('/adherents/:id', adherentController.delete);

	app.get('/abonnements', (req, res) =>	{
		res.render('abonnements')
	});
}