var express = require('express');
const mango_controlers= require('../controllers/mango');
var router = express.Router();
/* GET mango */
// GET request for one mango.
router.get('/', mango_controlers.mango_detail);
/* GET detail mango page */
router.get('/detail', mango_controlers.mango_view_one_Page);
/* GET create mango page */
router.get('/create', mango_controlers.mango_create_Page);
module.exports = router;
/* GET create update page */
router.get('/update', mango_controlers.mango_update_Page);
/* GET delete mango page */
router.get('/delete', mango_controlers.mango_delete_Page);

