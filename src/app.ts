import express from 'express'
import cors from 'cors'
import recipes from './api/recipes';
import errorHandler from './api/errorHandler';
import users from './api/users';
import auth from './api/auth';

const app = express()

app.use(express.json());
app.use(cors())

app.use('/api/recipes', recipes.router);
app.use('/api/users', users.router);
app.use('/api/auth', auth.router);

app.use(errorHandler);

export default app;

