var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(JSON.stringify(req));
  console.log(JSON.stringify(res));
  //models.Users.findAll()
  //.then(function(users){
  //  console.log(JSON.stringify(users))
  //});
  models.sequelize
    .authenticate()
    .then(function(err){
      console.log('Connection has been established successfully.');
    }, function(err){
      console.log('Unable to connect to the database:', err);
    });


  //models.User.findAll({
  //  include: [ models.Task ] // eager loading
  //}).then(function(users){
  //});
  //res.send('respond with a resource');
});

module.exports = router;
