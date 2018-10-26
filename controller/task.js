
var mongoose = require('mongoose'),
Task = mongoose.model('task');

exports.list = function(req, res){
Task.find().populate('workgroup').populate('user').exec((err, t) => {
    if (err) return res.status(500).send(err);
    if (!t) {
        err = new Error('List: task non trouvee');
        return res.status(404).send(err);
    }
    res.send(t);
});
}

exports.read = function(req, res){
var task = req.params.id;
Task.findById(task).exec((err, t) =>{
        if (err) return res.status(500).send(err);
        if (!t) {
            err = new Error('Read: task non trouvee');
            return res.status(404).send(err);
        }
        res.send(t);
    }
);
}

exports.create = (req, res) =>	{
    console.log('cccccccccccc');
var task = req.body.task;
console.log('cccc');
Task.create(task, (err, t) =>	{
    if (err) return res.status(500).send(err);
    if (!t) {
        err = new Error('Erreur creation task');
        return res.status(404).send(err);
    }
    console.log('Nouveau task: ' + t.createdAt);
    res.send(t);
});
}

exports.update = (req, res) =>	{
var id = req.params.id;
var task = req.body.task;
Task.findByIdAndUpdate(id, task, (err, t) =>	{
    if (err) return res.status(500).send(err);
    if (!t) {
        err = new Error('Update: task non trouvée');
        return res.status(404).send(err);
    }
    console.log('Update task: ' + t.createdAt);
    res.send(t);
});
}

exports.delete = (req, res) =>	{
var id = req.params.id;
Task.findByIdAndRemove(id, (err, t) =>	{
    if (err) return res.status(500).send(err);
    if (!t) {
        err = new Error("Supression: task n'existe pas");
        return res.status(404).send(err);
    }
    console.log('Supression task: ' + t.createdAt);
    res.send(t);
});
}
