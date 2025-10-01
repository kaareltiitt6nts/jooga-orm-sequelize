import express from "express"

export const authorRouter = express.Router()

authorRouter.get("/:id", (req, res) => {
  console.log(req.params.id)
  res.end()
})