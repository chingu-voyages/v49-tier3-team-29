import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import theme from '../../theme';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllBooks } from '../../reducers/bookSlice';

const Hero = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		async function fetchData() {
			await dispatch(fetchAllBooks());
		}
		fetchData();
	}, [dispatch]);

	const books = useSelector(state => state.book.bookInfo);
	const bookImages =
		books.length > 0 ? (
			books.map(book => (
				<Paper
					key={book.ISBN}
					elevation={5}
					sx={{
						backgroundImage: `url(${book.imageUrl})`,
						backgroundSize: 'contain',
						width: { xs: '68px', sm: '200px' },
						height: { xs: '125px', sm: '300px' },
					}}></Paper>
			))
		) : (
			<></>
		);

	return (
		<Box>
			<Box textAlign={{ sm: 'left' }}>
				<Typography variant="h5">
					What are{' '}
					<span
						style={{
							color: theme.palette.primary.main,
						}}>
						users
					</span>{' '}
					reading?
				</Typography>
			</Box>
			<Grid
				mt={3}
				container
				justifyContent={'space-between'}>
				{bookImages}
			</Grid>
		</Box>
	);
};

export default Hero;
