const User = require('../models/user.model');
const asyncHandler = require('../utils/asyncHandler');

/**
 * @route POST /api/users
 * @desc Register a new user
 * @access Public
**/

const RegisterUser = asyncHandler(
    async(req,res) => {
        // Validate request body
        // const { name, email, password } = req.body;
        res.status(200).json({
            success: true,
            message: 'OK'
        })
    }
)

module.exports = RegisterUser;