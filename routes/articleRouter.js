import express from "express"
import { createArticle, deleteArticle, editArticle, getAllArticles, getArticleBySlug } from "../controllers/articleController.js"

export const articleRouter = express.Router()

articleRouter.get("/", getAllArticles)
articleRouter.get("/:slug", getArticleBySlug)

articleRouter.post("/admin/create/", createArticle)
articleRouter.put("/admin/edit/", editArticle)
articleRouter.delete("/admin/delete/", deleteArticle)