import { Schema, model, Types } from 'mongoose';

const listSchema = new Schema({
	name: {
		type: String,
		default: 'My Books',
	},
	user: { type: Types.ObjectId, ref: 'User', required: true },
	books: [{ type: Types.ObjectId, ref: 'Book' }],
});

const List = model('List', listSchema);

export default List;
