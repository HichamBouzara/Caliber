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
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'user',
    }],
    judge: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
}, { timestamps: true });

WorkGroup.method({

})


WorkGroup.static({

})

mongoose.model('workgroup', WorkGroup)