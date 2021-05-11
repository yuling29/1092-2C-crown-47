var express = require('express');
var router = express.Router();


const categories = require('../data/categories');

const crown2Controller_xx = require('../controllers/crown2Controller_xx');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown2_xx', { 
    title: 'Hsingtai Chung 123456789 (static)' ,
    data: categories
  });
});


router.get('/homepage', crown2Controller_xx.getHomepage );


router.get('/shop_xx/:product', crown2Controller_xx.getProductsByCategory );
module.exports = router;
