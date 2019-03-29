var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // get data from db and send it to route to views/index.hbs page
  connect.query(`SELECT title, avatar FROM tbl_interest`, (err, result) => {
    if(err){
      throw err;
      console.log(err);
    } else {
      console.log(result);
      res.render('index', { avatars: result });
    }
  });
});

// get single hero

router.get('/:hero', function(req, res, next) {
  // get data from db and send it to route to views/index.hbs page
  console.log(req.params);
  connect.query(`SELECT * FROM tbl_interest WHERE title = "${req.params.hero}"`, (err, result) => {
    if(err){
      throw err;
      console.log(err);
    } else {
      console.log(result);
      res.render('bio', { bioData: result[0] });
    }
  });
});

module.exports = router;
