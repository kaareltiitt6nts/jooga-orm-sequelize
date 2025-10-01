import sequelize from "../utils/db.js"
import { DataTypes } from "sequelize"

const models = require("../models")

export const getArticlesByAuthorId = async (req, res) => {
  const authorId = req.params.id

  models.Authors.findOne({
    where: {
      id: authorId
    },
    include: {
      model: models.Articles
    }
  })
    .then(data => {
      return res.status(200).json({ data })
    })
    .catch(err => {
      console.log(err)
      return res.status(500).json({ message: err })
    })
}