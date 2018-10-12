
var forms = require('forms'),
    fields = forms.fields,
    validators = forms.validators;

module.exports = function(){
	return forms.create({
	    username: fields.string({required: true}),
	    email: fields.email({required: true}),
	    password: fields.password({required: true}),
	    confirm:  fields.password({
	        required: true,
	        validators: [validators.matchField('password')]
	    }),
	});
}