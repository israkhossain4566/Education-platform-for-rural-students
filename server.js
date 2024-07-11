/*
import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import messageRoutes from './routes/messageRoute.js';
import cookieParser from 'cookie-parser';

import cors from 'cors';

// Configure environment variables
dotenv.config();

// Connect to the database
connectDB();

// Initialize the app
const app = express();

// Middlewares
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/messages',messageRoutes);

// Test route
app.get('/', (req, res) => {
    res.send("<h1>Welcome to Gunjon app</h1>");
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`.bgCyan.white);
});
 */
import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import messageRoutes from './routes/messageRoute.js';
import userRoutes from './routes/userRoute.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import verifyRoute from './routes/verifyRoute.js' ;

// Configure environment variables
dotenv.config();

// Connect to the database
connectDB();

// Initialize the app
const app = express();

// CORS Configuration
app.use(cors({
    origin: 'http://localhost:3000', // Adjust this to your client URL
    credentials: true,
}));

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/messages', messageRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/usermail', verifyRoute);

// Test route
app.get('/', (req, res) => {
    res.send("<h1>Welcome to Gunjon app</h1>");
});

// Example endpoints



// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`.bgCyan.white);
});
