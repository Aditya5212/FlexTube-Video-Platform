/**
 * index.js
 * 
 * This file sets up the application and starts the server.
 */

// Import the dotenv library to load environment variables
require('dotenv').config({ path: './env' });
// import dotenv from 'dotenv';
// dotenv.config({
//     path: './env'
// })

// Import the Express.js application
const app = require('./app');

// Import the database connection function
const connectDB = require('./db_config/db.config.js');

// Define the port number for the server
const PORT = process.env.PORT || 4000;

/**
 * Connect to the database and start the server
 * 
 * This function connects to the database using the connectDB function and starts the server
 * on the specified port.
 */
connectDB()
  .then(() => {
    console.log("MongoDB connection established successfully!!!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection Failed!!!");
  });







/*
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error",(error)=>{
            console.log("Error: ",error);
            throw error;
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })  
        console.log('Connected to MongoDB');
    }catch(err){
        console.error('Failed to connect to MongoDB');
        process.exit(1);
    }
})
*/
