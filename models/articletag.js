'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArticleTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Tag, {
        foreignKey: "tagId"
      })

      this.belongsTo(models.Articles, {
        foreignKey: "articleId"
      })
    }
  }
  ArticleTag.init({
    articleId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ArticleTag',
  });
  return ArticleTag;
};