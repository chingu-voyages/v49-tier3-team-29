import { Schema, model } from 'mongoose';

const listSchema = new Schema({
	name: {
		type: String,
		required: [true, 'name is required'],
		trim: true,
		minlength: 3,
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	bookId: {
		type: Schema.Types.ObjectId,
		ref: 'Book',
	},
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
