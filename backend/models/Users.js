
import mongoose from 'mongoose';
//schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    email: {type: String, required: true , unique: true},
    password: {type: String, required: true},
    name: {type: String},
    created_at: {type: Date},
    isActive: {type: Boolean}
});

//model
const User = mongoose.model('User', userSchema);

export default User;
