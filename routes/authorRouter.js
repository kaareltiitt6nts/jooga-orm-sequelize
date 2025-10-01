import express from "express"
import { getArticlesByAuthorId } from "../controllers/authorController"

export const authorRouter = express.Router()

authorRouter.get("/:id", getArticlesByAuthorId)