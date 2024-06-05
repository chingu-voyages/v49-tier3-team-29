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
			<>
				<Grid
					item
					key={books[0].ISBN}>
					<Paper
						elevation={5}
						sx={{
							backgroundImage: `url(${books[0].imageUrl})`,
							backgroundSize: 'contain',
							width: { xs: '68px', sm: '200px' },
							height: { xs: '125px', sm: '300px' },
						}}></Paper>
				</Grid>
				<Grid
					item
					key={books[1].ISBN}>
					<Paper
						elevation={5}
						sx={{
							backgroundImage: `url(${books[1].imageUrl})`,
							backgroundSize: 'contain',
							width: { xs: '68px', sm: '200px' },
							height: { xs: '125px', sm: '300px' },
						}}></Paper>
				</Grid>
				<Grid
					item
					key={books[2].ISBN}
					display={{ xs: 'none', md: 'block' }}>
					<Paper
						elevation={5}
						sx={{
							backgroundImage: `url(${books[2].imageUrl})`,
							backgroundSize: 'contain',
							width: { xs: '68px', sm: '200px' },
							height: { xs: '125px', sm: '300px' },
						}}></Paper>
				</Grid>
				<Grid
					item
					key={books[3].ISBN}
					display={{ xs: 'none', lg: 'block' }}>
					<Paper
						elevation={5}
						sx={{
							backgroundImage: `url(${books[3].imageUrl})`,
							backgroundSize: 'contain',
							width: { xs: '68px', sm: '200px' },
							height: { xs: '125px', sm: '300px' },
						}}></Paper>
				</Grid>
				<Grid
					item
					key={books[4].ISBN}
					display={{ xs: 'none', lg: 'block' }}>
					<Paper
						elevation={5}
						sx={{
							backgroundImage: `url(${books[4].imageUrl})`,
							backgroundSize: 'contain',
							width: { xs: '68px', sm: '200px' },
							height: { xs: '125px', sm: '300px' },
						}}></Paper>
				</Grid>
			</>
		) : null;

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
				spacing={2}
				overflow={'hidden'}
				container
				justifyContent={'center'}>
				{bookImages}
			</Grid>
		</Box>
	);
};

export default Hero;
