var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Seance = new Schema({
  adherent: {type: Schema.Types.ObjectId, ref: 'adherent'},
  abonnement: {type: Schema.Types.ObjectId, ref: 'abonnement'},
  date_fin: {type: Date},
}, {timestamps: true});

Seance.method({

})


Seance.static({

})

mongoose.model('seance', Seance)