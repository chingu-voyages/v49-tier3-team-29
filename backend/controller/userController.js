import User from '../models/Users.js';

export const getAllUsers = async (req, res) => {
	console.log("get all");

	try {
		const users = await User.find();
		res.json(users);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const getUserByUsername = async (req, res) => {
	console.log("test get username");

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

	try{
		console.log("test update");

		//find by username
		const user = await User.findOne({ username: req.params.username});

		if (!user) {
			console.log(`User with username '${req.params.username}' not found in database.`);
			return res.status(404).json({ message: 'User not found' });
		}

		for( const key in req.body){
			if(req.body.hasOwnProperty(key)){
				user[key]= req.body[key];
			}
		}

		const updateUser = await user.save();

		res.json(updateUser);

	} catch (error) {
		
		res.status(500).json({ message: error.message });
	}
};

export const deactivate = async (req, res) => {
	try {
		
		const user = User.findOne(req.params.username , {isActive: false});
		if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'The account has been deactivated' });
    } catch (error) {
        console.error('Error deactivating account:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};