import sequelize from "../utils/db.js"
import { DataTypes } from "sequelize"

const models = require("../models")

export const getAllArticles = async (req, res) => {
  models.Articles.findAll()
    .then(data => {
      return res.status(200).json({ data })
    })
    .catch(err => {
      console.log(err)
      return res.status(500).json({ message: err })
    })
}

export const getArticleBySlug = (req, res) => {
  models.Articles.findOne({
    where: {
      slug: req.params.slug
    },
    include: {
      model: models.Authors
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