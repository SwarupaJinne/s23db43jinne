var mango = require('../models/mango');
// List of all mango
exports.mango_list = function(req, res) {
res.send('NOT IMPLEMENTED: mango list');
};
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
