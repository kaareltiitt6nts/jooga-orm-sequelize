import express from "express"

export const indexRouter = express.Router()

indexRouter.get("/", (req, res) => {
  console.log("index")
  res.end()
})