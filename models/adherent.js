
/*!
 * Module dependencies
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var uniqueValidator = require('mongoose-unique-validator');



var AdherentSchema = new Schema({
  nom: { type: String, default: '' },
  prenom: { type: String, default: '' },
  sexe: { type: String, default: '' },
  date_naissance: { type: String, default: '' },
  tel: { type: String, default: '', unique: true},
  email: { type: String, default: '', lowercase: true, unique: true},
  adresse: { type: String, default: '' },
  photo: { type: String, default: '' },
  groupe_sanguin: { type: String, default: '' },
}, {timestamps: true});


AdherentSchema.plugin(uniqueValidator, {message: 'is already taken.'})


AdherentSchema.method({

})


AdherentSchema.static({

})


mongoose.model('adherent', AdherentSchema)