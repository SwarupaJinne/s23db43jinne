var express = require('express');
const mango_controlers= require('../controllers/mango');
var router = express.Router();
/* GET mango */
// GET request for one costume.
router.get('/mango/:id', mango_controlers.mango_detail)
module.exports = router;
