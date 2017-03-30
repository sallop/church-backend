"use strict";

//var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){

  var Users = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'id'
    },
    group: {
      type: DataTypes.INTEGER,
      field: 'group'
    },
    name: {
      type: DataTypes.STRING,
      field: 'name'
    },
    pronounce: {
      type: DataTypes.STRING,
      field: 'pronounce'
    },
    spiritualName: {
      type: DataTypes.STRING,
      field: 'spiritual_name'
    },
    birthday: {
      type: DataTypes.DATE,
      field: 'birthday'
    },
    telephone: {
      type: DataTypes.STRING,
      field: 'telephone'
    },
    postcode: {
      type: DataTypes.STRING,
      field: 'postcode'
    },
    address: {
      type: DataTypes.STRING,
      field: 'address'
    },
    info: {
      type: DataTypes.TEXT,
      field: 'info'
    }
  },{
    classMethods: function(models) {
      Users.hasMany(models.Task)
    },
    freezeTableName: true, // Model tableName will be the same as the model name
    timestamps: false
  });

  return Users;
};

//sequelize.sync().then(function(){
//  return Users.create({
//    username: 'johndoe',
//    birthday: new Date(1987, 7, 7)
//  });
//}).then(function(john){
//  console.log(john.get({
//    plain: true
//  }));
//});


