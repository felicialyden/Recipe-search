import express from 'express'
import cors from 'cors'
import recipes from './api/recipes';

const app = express()

app.use(express.json());
app.use(cors())

app.use('/api/recipes', recipes.router);

export default app;

