
var mongoose = require('mongoose'),
User = mongoose.model('user');

exports.list = function(req, res){
User.find().exec((err, u) => {
    if (err) return res.status(500).send(err);
    if (!u) {
        err = new Error('List: users non trouvee');
        return res.status(404).send(err);
    }
    res.send(u);
});
}

exports.read = function(req, res){
var user = req.params.id;
User.findById(user).exec((err, u) =>{
        if (err) return res.status(500).send(err);
        if (!u) {
            err = new Error('Read: user non trouvee');
            return res.status(404).send(err);
        }
        res.send(u);
    }
);
}

exports.create = (req, res) =>	{
var user = req.body.user;
User.create(user, (err, u) =>	{
    if (err) return res.status(500).send(err);
    if (!u) {
        err = new Error('Erreur creation user');
        return res.status(404).send(err);
    }
    console.log('Nouveau user: ' + u.createdAt);
    res.send(u);
});
}

exports.update = (req, res) =>	{
var id = req.params.id;
var user = req.body.user;
User.findByIdAndUpdate(id, user, (err, u) =>	{
    if (err) return res.status(500).send(err);
    if (!u) {
        err = new Error('Update: user non trouvée');
        return res.status(404).send(err);
    }
    console.log('Update user: ' + u.createdAt);
    res.send(u);
});
}

exports.delete = (req, res) =>	{
var id = req.params.id;
User.findByIdAndRemove(id, (err, u) =>	{
    if (err) return res.status(500).send(err);
    if (!u) {
        err = new Error("Supression: user n'existe pas");
        return res.status(404).send(err);
    }
    console.log('Supression user: ' + u.createdAt);
    res.send(u);
});
}
