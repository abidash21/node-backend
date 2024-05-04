const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next))
    .catch((err) => next(err));
  }
}

export { asyncHandler };

// Higher order funtion - const func = () => { () => {}}
// accept other functions as arugments,return functions or can do both

// const asyncHandler = (fn) => async (req,res,next)=> {
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }
