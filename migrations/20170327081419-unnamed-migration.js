'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.createTable('users', {
      id: Sequelize.INTEGER,
      group: Sequelize.INTEGER,
      name: Sequelize.STRING,
      spiritual_name: Sequelize.STRING,
      birthday: Sequelize.DATE,
      telephone: Sequelize.STRING,
      postcode: Sequelize.STRING,
      address: Sequelize.STRING,
      info: Sequelize.TEXT,
    });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.dropTable('users');
  }
};
