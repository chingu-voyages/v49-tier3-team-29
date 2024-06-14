// import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook } from '../../reducers/bookSlice';

const BookPage = () => {
	const { field, searchQuery } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			await dispatch(fetchBook({ field, searchQuery }));
		};

		fetchData();
	}, [dispatch, field, searchQuery]);

	const book = useSelector(state => state.book.bookInfo);

	return (
		<>
			<div>{field}</div>
			<div>{searchQuery}</div>
			<div>{book.title}</div>
		</>
		// <div>
		// 	{book && (
		// 		<Card>
		// 			<CardMedia
		// 				style={{ height: 400 }}
		// 				image={book.imageUrl}
		// 				title={book.title}
		// 			/>
		// 			<CardContent>
		// 				<Typography
		// 					gutterBottom
		// 					variant="h5"
		// 					component="h2">
		// 					{book.title}
		// 				</Typography>
		// 				<Typography
		// 					variant="body1"
		// 					color="textSecondary"
		// 					component="p">
		// 					Author: {book.author}
		// 				</Typography>
		// 				<Typography
		// 					variant="body1"
		// 					color="textSecondary"
		// 					component="p">
		// 					Description: {book.description}
		// 				</Typography>
		// 				<Typography
		// 					variant="body1"
		// 					color="textSecondary"
		// 					component="p">
		// 					ISBN: {book.ISBN}
		// 				</Typography>
		// 				<Typography
		// 					variant="body1"
		// 					color="textSecondary"
		// 					component="p">
		// 					Reviews:
		// 				</Typography>
		// 			</CardContent>
		// 		</Card>
		// 	)}
		// 	,
		// </div>
	);
};

export default BookPage;
