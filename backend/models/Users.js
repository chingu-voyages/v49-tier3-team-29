import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

//schema
const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		minlength: 3,
		maxlength: 15,
	},
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true, minlength: 5 },
	name: { type: String },
	image: { type: String },
	created_at: { type: Date, default: Date.now },
	isActive: { type: Boolean, default: true },
	passwordResetToken: { type: String },
	passwordResetExpires: { type: Date },
});

//* Method for hashing password
userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) return next();
	this.password = await bcrypt.hash(this.password, 10);
	next();
});

//* Method for comparing password
userSchema.methods.comparePassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

//model
const User = mongoose.model('User', userSchema);

// export default User;
export default User;
