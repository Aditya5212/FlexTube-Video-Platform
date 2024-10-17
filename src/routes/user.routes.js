const express = require('express');
const router = express.Router();

// Import the user controller
const RegisterUser = require('../controllers/user.controller');

// Define routes
router.post('/register', RegisterUser);

// Export the router
module.exports = router;