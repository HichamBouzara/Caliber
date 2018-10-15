
var mongoose = require('mongoose'),
	Adherent = mongoose.model('adherent');
	


exports.list = function(req, res){
	Adherent.find((err, a) =>	{
		if (err) res.status(500).send(err);
		if (!a) {
			err = new Error('List: adherents non trouvees');
			return res.status(404).send(err);
		}
		res.send(a);
	});
}

exports.read = function(req, res){
	var adherentId = req.params.id;
	Adherent.findById(adherentId, (err, a) =>{
		if (err) return res.status(500).send(err);
		if (!a) {
			err = new Error('Read: adherent non trouvee');
			return res.status(404).send(err);
		}
		res.send(a);
	});
}

exports.create = (req, res) =>	{
	var adherent = req.body.adherent;
	Adherent.create(adherent, (err, a) =>	{
		if (err) return res.status(500).send(err);
		if (!a) {
			err = new Error('Read: adherent non trouvee');
			return res.status(404).send(err);
		}
		console.log('Nouveau adherent ajouté: ' + a.nom + ' ' + a.prenom);
		res.send(a);
	});
}

exports.update = (req, res) =>	{
	var id = req.params.id;
	var adherent = req.body.adherent;
	Adherent.findByIdAndUpdate(id, adherent, (err, a) =>	{
		if (err) return res.status(500).send(err);
		if (!a) {
			err = new Error('Update: adherent non trouvee');
			return res.status(404).send(err);
		}
		console.log('Update adherent: ' + a.nom + ' ' + a.prenom);
		res.send(adherent);
	});
}

exports.delete = (req, res) =>	{
	var id = req.params.id;
	Adherent.findByIdAndRemove(id, (err, a) =>	{
		if (err) return res.status(500).send(err);
		if (!a) {
			err = new Error('Delete: adherent non trouvee');
			return res.status(404).send(err);
		}
		console.log('Supression adherent: ' + a.nom + ' ' + a.prenom);
		res.send(a);
	});
}
