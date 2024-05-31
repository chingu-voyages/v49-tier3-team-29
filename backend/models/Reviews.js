import { Schema, model, SchemaTypes } from 'mongoose';

const reviewSchema = new Schema({
	title: {
		type: String,
		required: [true, 'title is required'],
		trim: true,
		minlength: 3,
	},
	body: {
		type: String,
		required: [true, 'review is required'],
		trim: true,
		minlength: 10,
	},
	rating: {
		type: Number,
		required: [true, 'rating is required'],
		min: 1,
		max: 5,
	},
	userId: {
		type: SchemaTypes.ObjectId,
		ref: 'User',
		required: true,
		alias: 'author',
	},
	bookId: {
		type: SchemaTypes.ObjectId,
		ref: 'Book',
		required: true,
	},
	created_at: {
		type: Date,
		default: () => Date.now(),
		immutable: true,
	},
	updated_at: { type: Date },
});

//* update the updatedAt field before saving the document

reviewSchema.pre('save', function (next) {
	this.updated_at = Date.now();
	next();
});

const Review = model('Review', reviewSchema);

export default Review;
