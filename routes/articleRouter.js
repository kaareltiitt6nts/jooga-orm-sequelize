import express from "express"

export const articleRouter = express.Router()

articleRouter.get("/:slug", (req, res) => {
  console.log(req.params.slug)
  res.end()
})