
var mongoose = require('mongoose'),
	User = mongoose.model('User'),
	registerUserForm = require('./../forms/registerUser.js'),
	loginUserForm = require('./../forms/loginUser.js');
	

exports.index = function(req, res){
	res.render('default_index')
}

exports.register = function(req, res){

	registerUserForm().handle(req, {
        success: function (form) {

    		var user = new User({
    			email: form.data.email,
    			name: form.data.username,
    			password: form.data.password
    		});  

    		user.save();

    		res.redirect('/');      
        },
        error: function (form) {
            res.render('default_register', {
				form: form.toHTML(),
			});
        },
        empty: function (form) {
			res.render('default_register', {
				form: form.toHTML(),
			});
        }
    });

}

exports.login = function(req, res){

	if(req.session.user){
		res.redirect('/restricted');
	}

   loginUserForm().handle(req, {
        success: function (form) {

			req.session.regenerate(function(){
		        req.session.user = form.data.email;
		        res.redirect('/restricted');
	        });

        },
        error: function (form) {
            res.render('default_login', {
				form: form.toHTML(),
			});
        },
        empty: function (form) {
			res.render('default_login', {
				form: form.toHTML(),
			});
        }
    });
};

exports.logout = function(req, res){

	req.session.destroy(function(){
        res.redirect('/');
    });
}