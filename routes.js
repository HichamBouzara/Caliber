
var workgroupController = require('./controller/workgroup.js'),
	taskController = require('./controller/task.js'),
	userController = require('./controller/user.js');

var mongoose = require('mongoose');

var User = mongoose.model('user');

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

    passport.use(new LocalStrategy(

     function(username, password, done) {
        User.findOne({ username: username }, function(err, user) {
        if (err) { return done(err); }
         if (!user)
         {
                  return done(null, false, { message: 'Incorrect username.' });
         }

             if (!user.validPassword(password))
        {

                return done(null, false, { message: 'Incorrect password.' });
              }
        return done(null, false, { message: 'Incorrect password.' });
        });
        }
	));
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	 });
	 
	 passport.deserializeUser(function(id, done) {
		User.findById(id, function (err, user) {
		   done(err, user);
		});
	 });
module.exports = function(app){

	app.get('/', (req, res) =>	{
		res.redirect('workgroups');
	});
	app.get('/users', userController.list);
	app.post('/users', userController.create);
	app.get('/users/:id', userController.read);
	app.put('/users/:id', userController.update);
	app.delete('/users/:id', userController.delete);

	app.get('/workgroups', workgroupController.list);
	app.post('/workgroups', workgroupController.create);
	app.get('/workgroups/:id', workgroupController.read);
	app.put('/workgroups/:id', workgroupController.update);
	app.delete('/workgroups/:id', workgroupController.delete);

	app.get('/tasks', taskController.list);
	app.post('/tasks', taskController.create);
	app.get('/tasks/:id', taskController.read);
	app.put('/tasks/:id', taskController.update);
	app.delete('/tasks/:id', taskController.delete);


	app.get('/login', (req, res) =>	{
		res.render('login');
	});
	app.post('/login',
    passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login', failureFlash: true })
);
}