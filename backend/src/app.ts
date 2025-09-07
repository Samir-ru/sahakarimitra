Sure, here's the proposed content for the file: /sahakarimitra/sahakarimitra/backend/src/app.ts

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import { authRoutes } from './routes/auth.routes';
import { contributionRoutes } from './routes/contribution.routes';
import { groupRoutes } from './routes/group.routes';
import { loanRoutes } from './routes/loan.routes';
import { connectToDatabase } from './config/database';
import { initializeFirebase } from './config/firebase';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database and Firebase initialization
connectToDatabase();
initializeFirebase();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contributions', contributionRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/loans', loanRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});