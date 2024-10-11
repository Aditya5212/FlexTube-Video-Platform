/**
 * asyncHandler.js
 * 
 * This file defines a utility function, asyncHandler, that wraps a request handler function
 * to catch and handle any errors that may occur.
 */

/**
 * asyncHandler function
 * 
 * This function takes a request handler function as an argument and returns a new function
 * that wraps the original function. The wrapper function catches any errors that occur
 * during the execution of the original function and passes them to the next middleware
 * function in the chain.
 * 
 * @param {function} requestHandler - The original request handler function
 * @returns {function} - The wrapped request handler function
 */
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
      Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err));
    }
  }
  
module.exports = asyncHandler;


// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

// const asyncHandler = (func) => async(req,res,next) =>{
//     try{
//         await func(req,res,next);
//     }catch(error){
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }