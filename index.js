import express from 'express';
import sequelize from './utils/db.js';
import { articleRouter } from './routes/articleRouter.js';
import { indexRouter } from './routes/indexRouter.js';

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", indexRouter)
app.use("/article", articleRouter)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})