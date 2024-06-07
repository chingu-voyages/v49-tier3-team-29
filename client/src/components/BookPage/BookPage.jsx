import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookPage = () => {
	const { id } = useParams();
	const [book, setBook] = useState(null);

	useEffect(() => {
		const fetchBook = async id => {
			try {
				const response = await fetch(`/book/${id}`);
				const data = await response.json();
				setBook(data);
			} catch (error) {
				console.error('Error fetching book data:', error);
			}
		};

		fetchBook(id);
	}, [id]);

	if (!book) {
		return <div>Loading...</div>;
	}

	return (
		<Card>
			<CardMedia
				style={{ height: 400 }}
				image={book.imageUrl}
				title={book.title}
			/>
			<CardContent>
				<Typography
					gutterBottom
					variant="h5"
					component="h2">
					{book.title}
				</Typography>
				<Typography
					variant="body1"
					color="textSecondary"
					component="p">
					Author: {book.author}
				</Typography>
				<Typography
					variant="body1"
					color="textSecondary"
					component="p">
					Description: {book.description}
				</Typography>
				<Typography
					variant="body1"
					color="textSecondary"
					component="p">
					ISBN: {book.ISBN}
				</Typography>
				<Typography
					variant="body1"
					color="textSecondary"
					component="p">
					Reviews:
				</Typography>
			</CardContent>
		</Card>
	);
};

export default BookPage;
