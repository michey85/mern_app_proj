import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import path from 'path';

import { connectDB } from './utils/index.js';
import hathaRoutes from './routes/hathaRoutes.js';
import mantraRoutes from './routes/mantraRoutes.js';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('/api/v1/hatha', hathaRoutes);
app.use('/api/v1/mantra', mantraRoutes);

app.get('/', (req, res) => {
  res.sendFile(
    path.join(path.resolve(), 'backend/index.html'),
  );
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log(`Server is lunched on port ${PORT}`.bgBlue));
