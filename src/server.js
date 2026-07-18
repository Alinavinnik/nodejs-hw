import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectMongoDB } from './db/connectMongoDB.js';
import { errors } from 'celebrate';
import noteRoutes from './routes/notesRoutes.js';
import authRouters from './routes/authRoutes.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import { logger } from './middleware/logger.js';

const app = express();

const PORT = process.env.PORT ?? 3000;

app.use(logger);
app.use(cors());
app.use(express.json());

app.use(noteRoutes);
app.use(authRouters);
app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
