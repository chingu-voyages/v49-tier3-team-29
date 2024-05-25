import User from '../models/Users.js';

export const newUser = async (req, res) => {
	//console.log("test register")

	try {
		const { username, email, password, name } = req.body;

		//check for existing user/email
		const existingUser = await User.findOne({
			$or: [{ username }, { email }],
		});

		//notify if used
		if (existingUser) {
			return res
				.status(400)
				.json({ message: 'Username and or Email already in use' });
		}

		//create new user
		const newUser = new User({ username, email, password, name });

		await newUser.save();
		res.json({ message: 'User registered successfully' });
		//res.status(201).json({ message: 'User registered successfully', user: newUser });
	} catch (error) {
		console.error('Error registering user:', error);
		res.status(500).json({ message: 'Internal server error' });
	}
};

export const getAllUsers = async (req, res) => {
	//console.log("get all");

	try {
		const users = await User.find().select('username');
		res.json(users);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const getUserByUsername = async (req, res) => {
	//console.log("test get username");

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

export const updateUser = async (req, res) => {
	try {
		//console.log("test update");

		//find by username
		const user = await User.findOne({ username: req.params.username });

		if (!user) {
			console.log(
				`User with username '${req.params.username}' not found in database.`
			);
			return res.status(404).json({ message: 'User not found' });
		}

		//update any field but isActive
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

export const deactivate = async (req, res) => {
	try {
		const { username } = req.params;

		//get by username
		const user = await User.findOne({ username });

		//if already deactivated
		if (!user.isActive) {
			return res
				.status(404)
				.json({ message: ' User already deactivated' });
		}

		//deactivate
		user.isActive = false;
		await user.save();

		res.json({ message: 'The account has been deactivated' });
	} catch (error) {
		console.error('Error deactivating account:', error);
		res.status(500).json({ message: 'Internal server error' });
	}
};
