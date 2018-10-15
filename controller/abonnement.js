
var mongoose = require('mongoose'),
Abonnement = mongoose.model('abonnement');

exports.list = function(req, res){
Abonnement.find().populate('plan').populate('adherent').exec((err, a) => {
    if (err) return res.status(500).send(err);
    if (!a) {
        err = new Error('List: abonnements non trouvee');
        return res.status(404).send(err);
    }
    res.send(a);
});
}

exports.read = function(req, res){
var abonnement = req.params.id;
Abonnement.findById(abonnement).populate('adherent').populate('plan').exec((err, a) =>{
        if (err) return res.status(500).send(err);
        if (!a) {
            err = new Error('Read: abonnement non trouvee');
            return res.status(404).send(err);
        }
        res.send(a);
    }
);
}

exports.create = (req, res) =>	{
var abonnement = req.body.abonnement;
Abonnement.create(abonnement, (err, a) =>	{
    if (err) return res.status(500).send(err);
    if (!a) {
        err = new Error('Erreur creation abonnement');
        return res.status(404).send(err);
    }
    console.log('Nouveau abonnement: ' + a.date_debut);
    res.send(a);
});
}

exports.update = (req, res) =>	{
var id = req.params.id;
var abonnement = req.body.abonnement;
Abonnement.findByIdAndUpdate(id, abonnement, (err, abonnement) =>	{
    if (err) return res.status(500).send(err);
    if (!abonnement) {
        err = new Error('Update: abonnement non trouvée');
        return res.status(404).send(err);
    }
    console.log('Update abonnement: ' + abonnement.date_debut);
    res.send(abonnement);
});
}

exports.delete = (req, res) =>	{
var id = req.params.id;
Abonnement.findByIdAndRemove(id, (err, a) =>	{
    if (err) return res.status(500).send(err);
    if (!a) {
        err = new Error("Supression: abonnement n'existe pas");
        return res.status(404).send(err);
    }
    console.log('Supression abonnement: ' + a.date_debut);
    res.send(a);
});
}
