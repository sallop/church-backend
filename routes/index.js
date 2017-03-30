var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
//router.get('/', function(req, res, next) {
//
//  res.render('index', { title: 'Express' });
//});

router.get('/', function(req, res, next) {
  //console.log(req);
  //console.log(res);
  console.log(models);
  //models.Users.findAll()
  models.users.findAll()
  .then(function(users){
    console.log(JSON.stringify(users));

    res.render('index', {
      title: 'Sequelize: Express Example',
      users: users
    });
  });
});

module.exports = router;
