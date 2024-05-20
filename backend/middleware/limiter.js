import { rateLimit } from 'express-rate-limit';

//**** Rate Limiter Middleware for General Requests ****
export const genLimiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 10 minutes
	max: 40, // limit each IP to 50 requests per windowMs
	message:
		'Too many requests from this IP, please try again after 10 minutes',
});

//**** Rate Limiter Middleware for Authentication Requests ****
export const authLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 3, // limit each IP to 3 authentication requests per windowMs
	message: 'Too many login attempts, please try again after 15 minutes',
});
