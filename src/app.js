import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import configRoutes from './routes/config.js';
import settingsRoutes from './routes/settings.js';
import sessionsRoutes from './routes/sessions.js';
import overrideRoutes from './routes/override.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/config', configRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/sessions', sessionsRoutes);
app.use('/api/override', overrideRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running ✅', timestamp: new Date() });
});

// app.listen(PORT, () => {
//  console.log(`🚀 Server running on http://localhost:${PORT}`);
// });

export default app;