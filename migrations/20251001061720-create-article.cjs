'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.TEXT
      },
      published: {
        type: Sequelize.DATE
      },
      author_id: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Articles');
  }
};