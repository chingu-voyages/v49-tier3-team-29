import User from '../models/Users.js';

// @desc		Get all users
// @route		GET	/users
export const getAllUsers = async (req, res) => {
	try {
		const users = await User.find().select('username');
		res.json(users);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// @desc		Get user by username
// @route		GET	/users/:username
export const getUserByUsername = async (req, res) => {
	try {
		const user = await User.findOne({ username: req.params.username });
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}
		res.json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// @desc		Update user information
// @route		PATCH	/users/:username
export const updateUser = async (req, res) => {
	try {
		// find by username
		const user = await User.findOne({ username: req.params.username });

		if (!user) {
			console.log(
				`User with username '${req.params.username}' not found in database.`
			);
			return res.status(404).json({ message: 'User not found' });
		}

		// update any field but isActive
		for (const key in req.body) {
			if (key !== 'isActive') {
				if (req.body.hasOwnProperty(key)) {
					user[key] = req.body[key];
				}
			}
		}

		const updateUser = await user.save();
		//res.json(updateUser);
		res.json({ message: 'User information had been updated' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// @desc		Deactivate user account
// @route		PATCH	/users/:username
export const deactivate = async (req, res) => {
	try {
		const { username } = req.params;

		// get by username
		const user = await User.findOne({ username });

		// if already deactivated
		if (!user.isActive) {
			return res
				.status(404)
				.json({ message: ' User already deactivated' });
		}

		// deactivate
		user.isActive = false;
		await user.save();

		res.json({ message: 'The account has been deactivated' });
	} catch (error) {
		console.error('Error deactivating account:', error);
		res.status(500).json({ message: 'Internal server error' });
	}
};
