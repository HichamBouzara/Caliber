
/*!
 * Module dependencies
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var userPlugin = require('mongoose-user')
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto'),
    cipher = crypto.createCipher('aes-256-cbc', 'salt');
 

/**
 * User schema
 */

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

/**
 * User plugin
 */

AdherentSchema.plugin(userPlugin, {})
AdherentSchema.plugin(uniqueValidator, {message: 'is already taken.'})

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

AdherentSchema.method({

})

/**
 * Statics
 */

AdherentSchema.static({

})

/**
 * Register
 */

mongoose.model('Adherent', AdherentSchema)