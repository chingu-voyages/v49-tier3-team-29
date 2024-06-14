// import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook } from '../../reducers/bookSlice';

const BookPage = () => {
	const { ISBN } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		async function fetchData() {
			await dispatch(fetchBook({ ISBN }));
		}
		fetchData();
	}, [dispatch, ISBN]);

	const book = useSelector(state => state.book.bookInfo);

	return (
		<>
			<div>ISBN</div>
			<div>${book}</div>
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
