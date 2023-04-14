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

// for a specific mango.
exports.mango_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await mango.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    

/*exports.mango_detail = function(req, res) {
res.send('NOT IMPLEMENTED: mango detail: ' + req.params.id);
};*/
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
/*exports.mango_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: mango update PUT' + req.params.id);
};*/

// Handle mango update form on PUT.
exports.mango_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await mango.findById( req.params.id)
// Do updates of properties
if(req.body.mango_type)
toUpdate.mango_type = req.body.mango_type;
if(req.body.cost) toUpdate.cost = req.body.cost;
if(req.body.size) toUpdate.size = req.body.size;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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

