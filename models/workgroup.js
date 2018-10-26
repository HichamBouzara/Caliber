var mongoose = require('mongoose')
var Schema = mongoose.Schema

var WorkGroup = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    penality: {
        type: String,
    }
}, { timestamps: true });

WorkGroup.method({

})


WorkGroup.static({

})

mongoose.model('workgroup', WorkGroup)