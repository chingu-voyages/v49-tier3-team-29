import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

//schema
const userSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	name: { type: String },
	created_at: { type: Date },
	isActive: { type: Boolean },
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

export default User;
