
var forms = require('forms'),
    fields = forms.fields,
    mongoose = require('mongoose'),
	User = mongoose.model('User');

module.exports = function(){

	return forms.create({
	    email: fields.email({required: true}),
	    password: fields.password({
	    	required: true,
	    	validators: [function (form, field, callback) {

	    		var query = User.findOne({ 'email': form.data.email });

				query.exec(function (err, user) {

					if(user && user.authenticate(field.data)){

						callback();
						return;

					}else{

						callback('Password not correct!');
						
					}

				});
	        }]
	    }),
	});

}