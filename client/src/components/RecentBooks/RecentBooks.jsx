import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import theme from '../../theme';
import Stack from '@mui/material/Stack';
import MaterialLink from '@mui/material/Link';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const RecentBooks = () => {
	return (
		<Stack
			pt={{ xs: 4, sm: 12 }}
			pb={{ xs: 8, sm: 16 }}
			spacing={{ xs: 3, sm: 6 }}
			justifyContent={'center'}
			alignItems={'center'}>
			<Typography variant="h5">Recently added to my books</Typography>
			<Stack
				width={{ sx: '100%', sm: '75%', md: '100%' }}
				justifyContent={'space-around'}
				direction={{ md: 'row' }}
				gap={3}>
				<Card>
					<CardContent sx={{ display: 'flex', gap: '12px' }}>
						<Paper
							elevation={5}
							sx={{
								bgcolor: theme.palette.primary.main,
								width: { xs: '50px' },
								height: { xs: '75px' },
							}}></Paper>
						<Stack textAlign={'left'}>
							<Typography variant="body1">Book Title</Typography>
							<Typography
								variant="body2"
								color={'text.secondary'}>
								by Book Author
							</Typography>
							<Typography
								variant="body2"
								mt={2}>
								This is a demo book for testing purposes
							</Typography>
						</Stack>
					</CardContent>
				</Card>
				<Card>
					<CardContent sx={{ display: 'flex', gap: '10px' }}>
						<Paper
							elevation={5}
							sx={{
								bgcolor: theme.palette.primary.main,
								width: { xs: '50px' },
								height: { xs: '75px' },
							}}></Paper>
						<Stack textAlign={'left'}>
							<Typography variant="body1">Book Title</Typography>
							<Typography
								variant="body2"
								color={'text.secondary'}>
								by Book Author
							</Typography>
							<Typography
								variant="body2"
								mt={2}>
								This is a demo book for testing purposes
							</Typography>
						</Stack>
					</CardContent>
				</Card>
				<Card>
					<CardContent sx={{ display: 'flex', gap: '10px' }}>
						<Paper
							elevation={5}
							sx={{
								bgcolor: theme.palette.primary.main,
								width: { xs: '50px' },
								height: { xs: '75px' },
							}}></Paper>
						<Stack textAlign={'left'}>
							<Typography variant="body1">Book Title</Typography>
							<Typography
								variant="body2"
								color={'text.secondary'}>
								by Book Author
							</Typography>
							<Typography
								variant="body2"
								mt={2}>
								This is a demo book for testing purposes
							</Typography>
						</Stack>
					</CardContent>
				</Card>
			</Stack>

			<MaterialLink component={Link}>View all books</MaterialLink>
		</Stack>
	);
};

export default RecentBooks;
