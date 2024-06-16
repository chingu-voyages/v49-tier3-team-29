import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
	const token =
		req.headers.authorization && req.headers.authorization.split(' ')[1];

	if (!token) {
		return res.sendStatus(403);
	}

	jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
		if (err) {
			return res.sendStatus(403);
		}

		req.user = user;
		next();
	});
};
