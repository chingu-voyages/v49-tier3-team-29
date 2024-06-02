import { Schema, model } from 'mongoose';

const listSchema = new Schema({
	name: {
		type: String,
		default: 'My Books',
	},
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
});

const List = model('List', listSchema);

export default List;
