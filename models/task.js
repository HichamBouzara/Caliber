var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Task = new Schema({
    libelle: {
            type: String,
            required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    deadline: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    workgroup: {
        type: Schema.Types.ObjectId,
        ref: 'workgroup',
    },
    points: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });

Task.method({

})


Task.static({

})

mongoose.model('task', Task)