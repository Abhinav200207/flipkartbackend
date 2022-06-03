// Creating the wrapper function for all the async function
module.exports = (asyncfun) => (req,res,next) => {
    Promise.resolve(asyncfun(req,res,next)).catch(next)
}