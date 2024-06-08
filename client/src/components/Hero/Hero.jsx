import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import theme from '../../theme';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllBooks } from '../../reducers/bookSlice';
import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';

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
							width: { xs: '150px', sm: '200px' },
							height: { xs: '200px', sm: '300px' },
						}}>
						<Stack
							color={'white'}
							gap={2}
							px={3}
							pt={{ xs: 1, sm: 5 }}
							alignItems={'center'}
							justifyContent={'center'}>
							<Typography variant="h6">
								{books[0].title}
							</Typography>
							<Typography variant="body2">
								By: {books[0].author}
							</Typography>
							<Box
								display={'flex'}
								justifyContent={'center'}
								alignItems={'center'}
								gap={1}>
								<StarIcon
									sx={{ fill: 'yellow' }}
									fontSize="small"></StarIcon>
								<Typography>
									{books[0].reviews.reduce(
										(acc, curr) => acc + curr.rating,
										0
									) / books[0].reviews.length}
								</Typography>
							</Box>
						</Stack>
					</Paper>
				</Grid>
				<Grid
					item
					key={books[1].ISBN}>
					<Paper
						elevation={5}
						sx={{
							backgroundImage: `url(${books[1].imageUrl})`,
							backgroundSize: 'contain',
							width: { xs: '150px', sm: '200px' },
							height: { xs: '200px', sm: '300px' },
						}}>
						<Stack
							color={'white'}
							gap={2}
							px={3}
							pt={{ xs: 1, sm: 5 }}
							alignItems={'center'}
							justifyContent={'center'}>
							<Typography variant="h6">
								{books[1].title}
							</Typography>
							<Typography variant="body2">
								By: {books[1].author}
							</Typography>
							<Box
								display={'flex'}
								justifyContent={'center'}
								alignItems={'center'}
								gap={1}>
								<StarIcon
									sx={{ fill: 'yellow' }}
									fontSize="small"></StarIcon>
								<Typography>
									{books[1].reviews.reduce(
										(acc, curr) => acc + curr.rating,
										0
									) / books[1].reviews.length}
								</Typography>
							</Box>
						</Stack>
					</Paper>
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
						}}>
						<Stack
							color={'white'}
							gap={2}
							px={3}
							pt={{ xs: 1, sm: 5 }}
							alignItems={'center'}
							justifyContent={'center'}>
							<Typography variant="h6">
								{books[2].title}
							</Typography>
							<Typography variant="body2">
								By: {books[2].author}
							</Typography>
							<Box
								display={'flex'}
								justifyContent={'center'}
								alignItems={'center'}
								gap={1}>
								<StarIcon
									sx={{ fill: 'yellow' }}
									fontSize="small"></StarIcon>
								<Typography>
									{books[2].reviews.reduce(
										(acc, curr) => acc + curr.rating,
										0
									) / books[2].reviews.length}
								</Typography>
							</Box>
						</Stack>
					</Paper>
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
						}}>
						<Stack
							color={'white'}
							gap={2}
							px={3}
							pt={{ xs: 1, sm: 5 }}
							alignItems={'center'}
							justifyContent={'center'}>
							<Typography variant="h6">
								{books[3].title}
							</Typography>
							<Typography variant="body2">
								By: {books[3].author}
							</Typography>
							<Box
								display={'flex'}
								justifyContent={'center'}
								alignItems={'center'}
								gap={1}>
								<StarIcon
									sx={{ fill: 'yellow' }}
									fontSize="small"></StarIcon>
								<Typography>
									{books[3].reviews.reduce(
										(acc, curr) => acc + curr.rating,
										0
									) / books[3].reviews.length}
								</Typography>
							</Box>
						</Stack>
					</Paper>
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
						}}>
						<Stack
							color={'white'}
							gap={2}
							px={3}
							pt={{ xs: 1, sm: 5 }}
							alignItems={'center'}
							justifyContent={'center'}>
							<Typography variant="h6">
								{books[4].title}
							</Typography>
							<Typography variant="body2">
								By: {books[4].author}
							</Typography>
							<Box
								display={'flex'}
								justifyContent={'center'}
								alignItems={'center'}
								gap={1}>
								<StarIcon
									sx={{ fill: 'yellow' }}
									fontSize="small"></StarIcon>
								<Typography>
									{books[4].reviews.reduce(
										(acc, curr) => acc + curr.rating,
										0
									) / books[4].reviews.length}
								</Typography>
							</Box>
						</Stack>
					</Paper>
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
