import { Schema, model } from 'mongoose';

const listSchema = new Schema({
	name: {
		type: String,
		default: 'My Books',
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	books: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Book',
		},
	],
	created_at: {
		type: Date,
		default: () => Date.now(),
		immutable: true,
	},
	updated_at: { type: Date },
});

listSchema.pre('save', function (next) {
	this.updated_at = Date.now();
	next();
});

const List = model('List', listSchema);

export default List;
