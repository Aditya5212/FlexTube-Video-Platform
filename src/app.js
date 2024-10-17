/**
 * app.js
 * 
 * This file sets up the Express.js application and configures its middleware.
 */

// Import the Express.js library
const express = require('express');

// Import the CORS middleware
const cors = require('cors');

// Import the cookie-parser middleware
const cookieParser = require("cookie-parser");

// Create a new Express.js application
const app = express();

/**
 * Configure CORS middleware
 * 
 * This middleware allows cross-origin resource sharing (CORS) for the application.
 * It specifies the allowed origins, methods, and headers for incoming requests.
 */
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));

/**
 * Configure JSON parsing middleware
 * 
 * This middleware parses incoming requests with JSON payloads.
 */
app.use(express.json({
  limit: "1mb",
  extended: true,
}));

/**
 * Configure URL-encoded parsing middleware
 * 
 * This middleware parses incoming requests with URL-encoded payloads.
 */
app.use(express.urlencoded({
  extended: true,
  limit: "1mb"
}));

/**
 * Configure static file serving middleware
 * 
 * This middleware serves static files from the 'public' directory.
 */
app.use(express.static("public"));

/**
 * Configure cookie parsing middleware
 * 
 * This middleware parses incoming requests for cookies.
 */
app.use(cookieParser());

// Export the Express.js application

// routes
const userRoutes = require('./routes/user.routes');
// apply routes 
app.use('/api/v1/users', userRoutes);

module.exports = app;