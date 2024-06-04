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
				<Paper
					elevation={5}
					sx={{
						bgcolor: theme.palette.primary.main,
						width: { xs: '68px', sm: '200px' },
						height: { xs: '125px', sm: '300px' },
					}}></Paper>
				<Paper
					elevation={5}
					sx={{
						bgcolor: theme.palette.primary.main,
						width: { xs: '68px', sm: '200px' },
						height: { xs: '125px', sm: '300px' },
					}}></Paper>
				<Paper
					elevation={5}
					sx={{
						display: { xs: 'none', sm: 'block' },
						bgcolor: theme.palette.primary.main,
						width: { xs: '68px', sm: '200px' },
						height: { xs: '125px', sm: '300px' },
					}}></Paper>
				<Paper
					elevation={5}
					sx={{
						display: { sm: 'none', md: 'block' },
						bgcolor: theme.palette.primary.main,
						width: { xs: '68px', sm: '200px' },
						height: { xs: '125px', sm: '300px' },
					}}></Paper>
				<Paper
					elevation={5}
					sx={{
						display: { sm: 'none', lg: 'block' },
						bgcolor: theme.palette.primary.main,
						width: { xs: '68px', sm: '200px' },
						height: { xs: '125px', sm: '300px' },
					}}></Paper>
			</Grid>
		</Box>
	);
};

export default Hero;
