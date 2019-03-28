var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // get data from db and send it to route to views/index.hbs page
  connect.query(`SELECT name, avatar FROM hero`, (err, result) => {
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
  connect.query(`SELECT * FROM hero WHERE name = "${req.params.hero}"`, (err, result) => {
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
