import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import appRouter from './routes/index.js';
config();
const app = express();
// GET - http://localhost:5000/
// POST - http://localhost:5000/
// PUT - http://localhost:5000/
// DELETE - http://localhost:5000/

//middlewares
app.use(express.json());
//remov it  in production
app.use(morgan("dev"));
app.use("/api/v1", appRouter);


export default app;