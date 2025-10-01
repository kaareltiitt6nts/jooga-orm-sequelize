'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn("ArticleTags", "tagId", {
        type: Sequelize.INTEGER,
        allowNull: false
      }),
      queryInterface.changeColumn("ArticleTags", "articleId", {
        type: Sequelize.INTEGER,
        allowNull: false
      })
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable("ArticleTags")
  }
};
