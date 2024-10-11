/**
 * db.config.js
 * 
 * This file sets up the database connection using Mongoose.
 */

// Import the dotenv library to load environment variables
require('dotenv').config();

// Import the Mongoose library
const mongoose = require('mongoose');

// Import the database name constant
const DB_NAME = require('../constants');

/**
 * Connect to the database
 * 
 * This function connects to the database using Mongoose and the specified database name.
 * 
 * @returns {Promise} A promise that resolves when the connection is established.
 */
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`Connected to MongoDB ${DB_NAME}...`);
    console.log(`DB Host:${connectionInstance.connection.host}`);
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err.message}`);
    process.exit(1);
  }
}

// Export the connectDB function
module.exports = connectDB;