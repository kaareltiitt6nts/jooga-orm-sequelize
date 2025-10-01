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
    include: [
      {
        model: models.Authors
      },
      {
        model: models.Tag,
        through: {
          model: models.ArticleTag
        }
      }
    ]
  })
    .then(data => {
      return res.status(200).json({ data })
    })
    .catch(err => {
      console.log(err)
      return res.status(500).json({ message: err })
    })
}

export const createArticle = (req, res) => {
  const name = req.body.name
  const slug = req.body.slug
  const image = req.body.image
  const body = req.body.body

  models.Articles.create({
    name: name,
    slug: slug,
    image: image,
    body: body,
    published: new Date().toISOString().slice(0, 19).replace("T", " ")
  })
  .then(data => {
    return res.status(200).json({message: "Article created"})
  })
  .catch(err => {
    return res.status(500).json({message: `Failed to create article: ${err}`})
  })
}

export const editArticle = (req, res) => {
  const id = req.body.id
  const { name, slug, image, body } = req.body

  models.Articles.update(
    {
      name: name,
      slug: slug,
      image: image,
      body: body,
      updatedAt: new Date().toISOString().slice(0, 19).replace("T", " ")
    },
    {
      where: { id: id }
    }
  )
  .then(result => {
    if (result[0] === 0) {
      return res.status(404).json({ message: "Article not found or nothing to update" })
    }
    return res.status(200).json({ message: "Article edited" })
  })
  .catch(err => {
    return res.status(500).json({ message: `Failed to edit article: ${err}` })
  })
}


export const deleteArticle = (req, res) => {
  const id = req.body.id

  models.Articles.destroy({
    where: {
      id: id
    }
  })
  .then(data => {
    return res.status(200).json({message: "Article deleted"})
  })
  .catch(err => {
    return res.status(500).json({message: `Failed to delete article: ${err}`})
  })
}