
var mongoose = require('mongoose'),
Workgroup = mongoose.model('workgroup');

exports.list = function(req, res){
Workgroup.find().exec((err, w) => {
    if (err) return res.status(500).send(err);
    if (!w) {
        err = new Error('List: workgroup non trouvee');
        return res.status(404).send(err);
    }
    var args = {
        "workgroups": w
    }
    res.render('workgroups', {"args": args});
});
}

exports.read = function(req, res){
var workgroup = req.params.id;
console.log(workgroup);
Workgroup.findById(workgroup).exec((err, w) =>{
        if (err) return res.status(500).send(err);
        if (!w) {
            err = new Error('Read: workgroup non trouvee');
            return res.status(404).send(err);
        }
        res.render('workgroup_id');
    }
);
}

exports.create = (req, res) =>	{
    console.log('creating');
var workgroup = req.body.workgroup;
Workgroup.create(workgroup, (err, w) =>	{
    if (err) return res.status(500).send(err);
    if (!w) {
        err = new Error('Erreur creation workgroup');
        return res.status(404).send(err);
    }
    console.log('Nouveau workgroup: ' + w.createdAt);
    res.send(w);
});
}

exports.update = (req, res) =>	{
var id = req.params.id;
var workgroup = req.body.workgroup;
Workgroup.findByIdAndUpdate(id, workgroup, (err, w) =>	{
    if (err) return res.status(500).send(err);
    if (!w) {
        err = new Error('Update: workgroup non trouvée');
        return res.status(404).send(err);
    }
    console.log('Update workgroup: ' + w.createdAt);
    res.send(w);
});
}

exports.delete = (req, res) =>	{
var id = req.params.id;
Workgroup.findByIdAndRemove(id, (err, w) =>	{
    if (err) return res.status(500).send(err);
    if (!w) {
        err = new Error("Supression: workgroup n'existe pas");
        return res.status(404).send(err);
    }
    console.log('Supression workgroup: ' + w.createdAt);
    res.send(w);
});
}
