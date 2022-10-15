var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PIKACHU', name:'PraveenCpk',rollno:'21PA31'});
});

module.exports = router;
