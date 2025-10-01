import express from "express"
import { getAllArticles, getArticleBySlug } from "../controllers/articleController.js"

export const articleRouter = express.Router()

articleRouter.get("/", getAllArticles)
articleRouter.get("/:slug", getArticleBySlug)