import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import theme from '../../theme';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllBooks } from '../../reducers/bookSlice';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

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
					<Button
						component={Link}
						to={'/'}>
						<Paper
							elevation={5}
							sx={{
								backgroundImage: `url(${books[0].imageUrl})`,
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								width: { xs: '150px', sm: '200px' },
								height: { xs: '200px', sm: '300px' },
							}}></Paper>
					</Button>
					<Box
						mt={2}
						display={'flex'}
						justifyContent={'center'}
						alignItems={'center'}
						gap={1}>
						<StarIcon
							sx={{ fill: 'gold' }}
							fontSize="large"></StarIcon>
						<Typography variant="h5">
							{books[0].reviews.reduce(
								(acc, curr) => acc + curr.rating,
								0
							) / books[0].reviews.length}
						</Typography>
					</Box>
				</Grid>
				<Grid
					item
					key={books[1].ISBN}>
					<Button
						component={Link}
						to={'/'}>
						<Paper
							elevation={5}
							sx={{
								backgroundImage: `url(${books[1].imageUrl})`,
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								width: { xs: '150px', sm: '200px' },
								height: { xs: '200px', sm: '300px' },
							}}></Paper>
					</Button>
					<Box
						mt={2}
						display={'flex'}
						justifyContent={'center'}
						alignItems={'center'}
						gap={1}>
						<StarIcon
							sx={{ fill: 'gold' }}
							fontSize="large"></StarIcon>
						<Typography variant="h5">
							{books[1].reviews.reduce(
								(acc, curr) => acc + curr.rating,
								0
							) / books[1].reviews.length}
						</Typography>
					</Box>
				</Grid>
				<Grid
					item
					key={books[2].ISBN}
					display={{ xs: 'none', md: 'block' }}>
					<Button
						component={Link}
						to={'/'}>
						<Paper
							elevation={5}
							sx={{
								backgroundImage: `url(${books[2].imageUrl})`,
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								width: { xs: '68px', sm: '200px' },
								height: { xs: '125px', sm: '300px' },
							}}></Paper>
					</Button>
					<Box
						mt={2}
						display={'flex'}
						justifyContent={'center'}
						alignItems={'center'}
						gap={1}>
						<StarIcon
							sx={{ fill: 'gold' }}
							fontSize="large"></StarIcon>
						<Typography variant="h5">
							{books[2].reviews.reduce(
								(acc, curr) => acc + curr.rating,
								0
							) / books[2].reviews.length}
						</Typography>
					</Box>
				</Grid>
				<Grid
					item
					key={books[3].ISBN}
					display={{ xs: 'none', lg: 'block' }}>
					<Button
						component={Link}
						to={'/'}>
						<Paper
							elevation={5}
							sx={{
								backgroundImage: `url(${books[3].imageUrl})`,
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								width: { xs: '68px', sm: '200px' },
								height: { xs: '125px', sm: '300px' },
							}}></Paper>
					</Button>
					<Box
						mt={2}
						display={'flex'}
						justifyContent={'center'}
						alignItems={'center'}
						gap={1}>
						<StarIcon
							sx={{ fill: 'gold' }}
							fontSize="large"></StarIcon>
						<Typography variant="h5">
							{books[3].reviews.reduce(
								(acc, curr) => acc + curr.rating,
								0
							) / books[3].reviews.length}
						</Typography>
					</Box>
				</Grid>
				<Grid
					item
					key={books[4].ISBN}
					display={{ xs: 'none', lg: 'block' }}>
					<Button
						component={Link}
						to={'/'}>
						<Paper
							elevation={5}
							sx={{
								backgroundImage: `url(${books[4].imageUrl})`,
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								width: { xs: '68px', sm: '200px' },
								height: { xs: '125px', sm: '300px' },
							}}></Paper>
					</Button>
					<Box
						mt={2}
						display={'flex'}
						justifyContent={'center'}
						alignItems={'center'}
						gap={1}>
						<StarIcon
							sx={{ fill: 'gold' }}
							fontSize="large"></StarIcon>
						<Typography variant="h5">
							{books[4].reviews.reduce(
								(acc, curr) => acc + curr.rating,
								0
							) / books[4].reviews.length}
						</Typography>
					</Box>
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
