import {
	Box,
	Card,
	CardContent,
	CardMedia,
	CssBaseline,
	Grid,
	Typography,
} from '@mui/material';
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

	// let book = useSelector(state => state.book.bookInfo);
	let book = null;

	const testBook = {
		title: 'The Great Gatsby',
		description: `The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.`,
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg',
		genre: 'Fiction',
		author: 'F. Scott Fitzgerald',
		ISBN: '9780743273565',
		created_at: new Date(),
	};

	if (!book) {
		book = testBook;
	}

	return (
		<div>
			<CssBaseline />
			<Box
				sx={{
					background: 'linear-gradient(to bottom, #FFEFD5, #FFFFFF)',
					padding: 4,
				}}
				py={4}>
				<Grid
					container
					spacing={3}>
					<Grid
						item
						xs={12}
						md={4}>
						<Card elevation={3}>
							<CardMedia
								component="img"
								alt={book.title}
								height="100%"
								image={book.imageUrl}
								title={book.title}
							/>
						</Card>
					</Grid>
					<Grid
						item
						xs={12}
						md={8}
						sx={{ textAlign: 'left' }}>
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
							{book.author}
						</Typography>
						<Card>
							<CardContent>
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
							</CardContent>
						</Card>
						<Typography
							variant="body1"
							color="textSecondary"
							component="p">
							Reviews
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default BookPage;
