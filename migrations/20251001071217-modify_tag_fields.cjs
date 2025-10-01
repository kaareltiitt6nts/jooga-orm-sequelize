'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn("Tags", "name", {
        type: Sequelize.STRING,
        allowNull: false
      })
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable("Tags")
  }
};
