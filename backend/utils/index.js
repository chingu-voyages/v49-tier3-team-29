import dotenv from 'dotenv';
dotenv.config();

import nodemailer from 'nodemailer';
export const transporter = nodemailer.createTransport({
	// Bia: I created an account with Brevo. Under the free plan, it allows 300 emails per day free of charge through Brevo's SMTP server and my credentials. For more information: brevo.com
	host: 'smtp-relay.brevo.com',
	auth: {
		user: process.env.BREVO_USERID,
		pass: process.env.BREVO_PASS,
	},
});
