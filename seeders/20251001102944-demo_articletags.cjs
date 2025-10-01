'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.bulkInsert("ArticleTags", [
        {
          tagId: 1,
          articleId: 1
        }
      ]),
      queryInterface.bulkInsert("ArticleTags", [
        {
          tagId: 1,
          articleId: 2
        }
      ]),
      queryInterface.bulkInsert("ArticleTags", [
        {
          tagId: 1,
          articleId: 3
        }
      ]),
      queryInterface.bulkInsert("ArticleTags", [
        {
          tagId: 2,
          articleId: 1
        }
      ]),
      queryInterface.bulkInsert("ArticleTags", [
        {
          tagId: 1,
          articleId: 2
        }
      ]),
      
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('ArticleTags');
  }
};
