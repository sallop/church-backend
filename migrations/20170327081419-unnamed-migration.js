'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      group: Sequelize.INTEGER,
      name: Sequelize.STRING,
      spiritual_name: Sequelize.STRING,
      birthday: Sequelize.DATE,
      telephone: Sequelize.STRING,
      postcode: Sequelize.STRING,
      address: Sequelize.STRING,
      info: Sequelize.TEXT,

      createdAt: {
        type: Sequelize.DATE, // mysql5.5 DATETIME
        allowNull: false,
        defaultValue: '0000-00-00 00:00:00'
        // mysql5.5 can't take a dynamic value
        // mysql5.6 may do it
        //defaultValue: Sequelize.literal('NOW()')
        //defaultValue: Sequelize.literal('DATE()')
        //defaultValue: Sequelize.NOW // mysql5.5 DATETIME YYYY-MM-DD
        //defaultValue: Sequelize.NOW()
        //defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE, // mysql5.5 DATETIME
        allowNull: false,
        defaultValue: '0000-00-00 00:00:00'
        // mysql5.5 can't take a dynamic value
        // mysql5.6 may do it 
        //defaultValue: Sequelize.literal('NOW()')
        //defaultValue: Sequelize.literal('DATE()')
        //defaultValue: Sequelize.NOW
        //defaultValue: Sequelize.NOW()
        //defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },

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
