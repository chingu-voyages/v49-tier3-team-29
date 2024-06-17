import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
dotenv.config();

export const transporter = nodemailer.createTransport({
	// Bia: I created an account with Brevo. Under the free plan, it allows 300 emails per day free of charge through Brevo's SMTP server and my credentials. For more information: brevo.com
	host: 'smtp-relay.brevo.com',
	auth: {
		user: process.env.BREVO_USERID,
		pass: process.env.BREVO_PASS,
	},
});

export const generateToken = (user, expiresIn) => {
	return jwt.sign(
		{ id: user._id, username: user.username },
		process.env.JWT_SECRET,
		{
			expiresIn: expiresIn,
		}
	);
};
