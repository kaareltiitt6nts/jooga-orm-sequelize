'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert("Authors", [{
        name: "Ashley Galvin"
      }]),
      queryInterface.bulkInsert("Authors", [{
        name: "Patrick Beach"
      }]),
      queryInterface.bulkInsert("Authors", [{
        name: "MacKenzie Miller"
      }]),
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable("Authors")
  }
};
