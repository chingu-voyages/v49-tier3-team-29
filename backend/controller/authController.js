import User from '../models/Users.js';
import List from '../models/Lists.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { transporter, generateToken } from '../utils/index.js';

dotenv.config();

// Get token from model, create cookie and send response
export const sendTokenResponse = (user, statusCode, res) => {
	// Create token
	const accessToken = generateToken(user, '15m');
	const refreshToken = generateToken(user, '7d');

	res.status(statusCode).json({
		user: {
			username: user.username,
			email: user.email,
			name: user.name,
			userImage: user.image,
		},
		accessToken,
		refreshToken,
	});
};

async function forgotPassword(req, res) {
	// Find user by email
	const user = await User.findOne({ email: req.body.email });

	if (!user) {
		return res.status(404).json({ error: 'Could not find user' });
	}

	// Generate a password reset token and set an expiry date
	const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
		expiresIn: '1h',
	});
	user.passwordResetToken = token;
	user.passwordResetExpires = Date.now() + 3600000; // 1hr
	await user.save();

	//  Sent password reset email
	const resetUrl = `http://localhost:5173/auth/reset-password?token=${token}`;
	const mailOptions = {
		from: 'admin@example.com',
		to: user.email,
		subject: 'Password reset request',
		html: `
      <p>Please reset your password. Click the link below to reset your password.<\p>
      <a href="${resetUrl}">${resetUrl}<\a>
      <p>If you have not made this request, please ignore this email.<\p>
      `,
	};

	try {
		await transporter.sendMail(mailOptions);
		res.json({ message: 'Password reset email has been sent' });
	} catch (err) {
		console.error('Failed to send password reset email', err);
		res.status(500).json({ error: 'Failed to send password reset email' });
	}
}

async function resetPassword(req, res) {
	//Validate password reset token
	const token = req.query.token;
	const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

	//Find user by ID and token and check if token is still valid
	const user = await User.findOne({
		_id: decodedToken.id,
		passwordResetToken: token,
		passwordResetExpires: { $gt: Date.now() },
	});

	if (!user) {
		return res
			.status(401)
			.json({ error: 'Invalid or expired password reset token' });
	}

	//Update the user's password and remove the reset token and its expiration date
	user.password = req.body.password;
	user.passwordResetToken = undefined;
	user.passwordResetExpires = undefined;
	await user.save();

	//Send confirmation email for resetting password
	const mailOptions = {
		from: 'admin@example.com',
		to: user.email,
		subject: 'Confirm resetting password',
		html: `
      <p>Your password has been successfully reset. If you have not made this request, please contact us immediately.</p>
    `,
	};

	try {
		await transporter.sendMail(mailOptions);
		res.json({ message: 'Password reset successful' });
	} catch (err) {
		console.error('Failed to send password reset confirmation email:', err);
		res.status(500).json({
			error: 'Failed to send password reset confirmation email',
		});
	}
}

// @desc		Register new user
// @route		POST	/users/register
export const newUser = async (req, res) => {
	try {
		const { username, email, password, name } = req.body;

		// check for existing user/email
		const existingUser = await User.findOne({
			$or: [{ username }, { email }],
		});

		// notify if used
		if (existingUser) {
			return res
				.status(400)
				.json({ message: 'Username and or Email already in use' });
		}

		// create new user
		const newUser = new User({ username, email, password, name });

		await newUser.save();

		// Create List "My Books" for new user
		const newList = new List({
			userId: newUser._id,
		});

		await newList.save();

		sendTokenResponse(newUser, 201, res);
	} catch (error) {
		console.error('Error registering user:', error);
		res.status(500).json({ message: 'Internal server error' });
	}
};

// @desc		Login user
// @route		POST	/users/login
export const login = async (req, res) => {
	try {
		const { username, password } = req.body;

		const user = await User.findOne({ username });

		if (user) {
			if (await bcrypt.compare(password, user.password))
				sendTokenResponse(user, 200, res);
			else {
				res.status(401).json({
					message: 'Incorrect login credentials',
				});
			}
		} else {
			res.status(404).json({ message: 'User not found' });
		}
	} catch (error) {
		console.error('Error loging in user:', error);
		res.status(500).json({ message: 'Internal server error' });
	}
};

// @desc		Log user out
// @route		POST	/users/logout
// @access  private
export const logoutUser = async (req, res) => {
	res.cookie('token', 'none', {
		expires: new Date(Date.now() + 10 * 1000),
		httpOnly: true,
	});

	res.status(200).json({
		success: true,
		message:
			'User is logged out. Cookie is reset and it is no longer valid.',
	});
};
// @desc		Refresh token
// @route		POST	/users/refresh-token
export const refreshToken = (req, res) => {
	const { token } = req.body;

	if (!token) {
		return res.sendStatus(401);
	}

	jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) {
			return res.sendStatus(403);
		}
		const newAccessToken = generateToken(decoded, '15m');
		res.json({ accessToken: newAccessToken });
	});
};

export { forgotPassword, resetPassword };
