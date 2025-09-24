import express from 'express';
import sequelize from './utils/db.js';

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})