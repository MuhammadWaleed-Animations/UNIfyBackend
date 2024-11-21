const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const tstRoute = require('./routers/tst');
const userRoutes = require('./routers/userRoutes');
const postRoutes = require('./routers/postRoutes');
const blockedUserRoutes = require('./routers/blockedUserRoutes');
const adminRoutes = require('./routers/adminRoutes');
const path = require('path');

dotenv.config();

const app = express();

// MongoDB Connection
const mongoURI = process.env.MONGO_URI || "your-default-mongo-uri";
mongoose.connect(mongoURI);

mongoose.connection.on('connected', () => {
  console.log('MongoDB connection established successfully!');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB connection disconnected');
});

// Middleware
app.use(morgan('dev'));
app.use(express.json()); // Replaces body-parser
app.use(express.urlencoded({ extended: false })); // Handles URL-encoded data
app.use(cors()); // Enables CORS with default settings
// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/tst', tstRoute);
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/blocked-users', blockedUserRoutes);
app.use('/admin',adminRoutes);


// 404 Route Handler
app.use((req, res, next) => {
  const error = new Error("Route Not Found");
  error.status = 404;
  next(error);
});

// Global Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message,
    },
  });
});

module.exports = app; 

