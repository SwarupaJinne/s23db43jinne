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
// for a specific mango.
exports.mango_detail = function(req, res) {
res.send('NOT IMPLEMENTED: mango detail: ' + req.params.id);
};
// Handle mango create on POST.
exports.mango_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: mango create POST');
};
// Handle mango delete form on DELETE.
exports.mango_delete = function(req, res) {
res.send('NOT IMPLEMENTED: mango delete DELETE ' + req.params.id);
};
// Handle mango update form on PUT.
exports.mango_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: mango update PUT' + req.params.id);
};

/ VIEWS
// Handle a show all view
exports.mango_view_all_Page = async function(req, res) {
try{
themangos = await mango.find();
res.render('mangos', { title: 'mango Search Results', results: themangos });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
var express = require('express');
const mango_controlers= require('../controllers/mango');
var router = express.Router();
/* GET mangos */
router.get('/', mango_controlers.mango_view_all_Page );
module.exports = router;

