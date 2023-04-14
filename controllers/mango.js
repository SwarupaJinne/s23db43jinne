var mango = require('../models/mango');

// List of all mango
exports.mango_list = async function(req, res) {
    try{
    themango = await mango.find();
    res.send(themango);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    

// List of all mango
/*
exports.mango_list = function(req, res) {
res.send('NOT IMPLEMENTED: mango list');
}; */

// Handle mango create on POST.



// for a specific mango.
exports.mango_detail = function(req, res) {
res.send('NOT IMPLEMENTED: mango detail: ' + req.params.id);
};
// Handle mango create on POST.
exports.mango_create_post = async function(req, res) {
//asyncres.send('NOT IMPLEMENTED: mango create POST');
console.log(req.body)
let document = new mango();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"mango_type":"goat", "cost":12, "size":"large"}
document.mango_type = req.body.mango_type;
document.mango_quantity = req.body.mango_quantity;
document.mango_price = req.body.mango_price;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// Handle mango delete form on DELETE.
exports.mango_delete = function(req, res) {
res.send('NOT IMPLEMENTED: mango delete DELETE ' + req.params.id);
};
// Handle mango update form on PUT.
exports.mango_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: mango update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.mango_view_all_Page = async function(req, res) {
    try{
    themango = await mango.find();
    res.render('mango', { title: 'mango Search Results', results: themango });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

