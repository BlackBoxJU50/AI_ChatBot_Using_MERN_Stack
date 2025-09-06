import express from 'express';
import { config } from 'dotenv';
config();
const app = express();
// GET - http://localhost:5000/
// POST - http://localhost:5000/
// PUT - http://localhost:5000/
// DELETE - http://localhost:5000/
//middlewares
app.use(express.json());
export default app;
//# sourceMappingURL=app.js.map