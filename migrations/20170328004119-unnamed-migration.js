'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    //(table, attribute name, attribute definition)
    return queryInterface.addColumn('users', 'pronounce', {
      type: Sequelize.STRING,
      after: 'spiritual_name'
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('users', 'pronounce');
  }
};
