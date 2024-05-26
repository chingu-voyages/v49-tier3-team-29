import { Schema, model, SchemaTypes } from 'mongoose';

const bookSchema = new Schema({
	title: {
		type: String,
		required: [true, 'title is required'],
		trim: true,
		minlength: 3,
	},
	description: {
		type: String,
		required: [true, 'description is required'],
		trim: true,
		minlength: 20,
	},
	genre: {
		type: String,
		required: [true, 'genre is required'],
		enum: [
			'Fiction',
			'Non-Fiction',
			'Science Fiction',
			'Fantasy',
			'Biography',
			'History',
			'Romance',
			'Thriller',
			'Mystery',
			'Self-Help',
			'Health',
		],
		trim: true,
	},
	userId: {
		type: SchemaTypes.ObjectId,
		ref: 'User',
		required: true,
		alias: 'author',
	},
	isBan: {
		type: String,
		required: [true, 'isBan is required'],
		trim: true,
		unique: true,
		minlength: 10,
		maxlength: 13,
	},
	created_at: {
		type: Date,
		default: () => Date.now(),
		immutable: true,
	},
	updated_at: { type: Date },
});

//* update the updatedAt field before saving the document

bookSchema.pre('save', function (next) {
	this.updated_at = Date.now();
	next();
});

const Book = model('Book', bookSchema);

export default Book;
