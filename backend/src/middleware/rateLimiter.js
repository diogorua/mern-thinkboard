import rateLimit from "../config/upstash.js";


const rateLimiter =  async (req, res, next) => {
    try {
        const {success} = await rateLimit.limit("my-rate-limiting"); //if we had authentication, we should use userid to limit per user, but here we limit globally
        if(!success) {
            return res.status(429).json({message: 'Too many requests, please try again later'});
        }
        next();
    } catch (error) {
        console.log("Rate limiter error", error);
        next(error);
    }
}

export default rateLimiter;