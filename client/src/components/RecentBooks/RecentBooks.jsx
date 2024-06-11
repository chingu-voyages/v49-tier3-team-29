import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import MaterialLink from '@mui/material/Link';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchList } from '../../reducers/listSlice';

const RecentBooks = () => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.session.userInfo);

	// Select the books list from the listInfo
	const list = useSelector(state => state.list.listInfo.books);
	useEffect(() => {
		if (user.username) {
			dispatch(fetchList(user.username));
		}
	}, [user, dispatch]);
	let recentBooks = (
		<Typography variant="h6">No books recently added</Typography>
	);
	if (list) {
		if (list.length > 0) {
			recentBooks = list.map(book => (
				<Card
					key={book.ISBN}
					sx={{ maxWidth: '400px' }}>
					<CardContent
						sx={{
							display: { xs: 'flex' },
							flexDirection: 'column',
							gap: 3,
						}}>
						<Paper
							elevation={5}
							sx={{
								alignSelf: 'center',
								backgroundImage: `url(${book.imageUrl})`,
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								width: '100px',
								height: '150px',
							}}></Paper>

						<Stack textAlign={'left'}>
							<MaterialLink
								component={Link}
								to={'/'}>
								{book.title}
							</MaterialLink>
							<Typography
								variant="body2"
								color={'text.secondary'}>
								by {book.author}
							</Typography>
							<Typography
								variant="body2"
								mt={2}
								textOverflow={'ellipsis'}
								overflow={'hidden'}
								sx={{
									lineClamp: 2,
									display: '-webkit-box',
									WebkitLineClamp: 3,
									WebkitBoxOrient: 'vertical',
								}}>
								{book.description}
							</Typography>
						</Stack>
					</CardContent>
				</Card>
			));
		}
	}

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
				alignItems={'center'}
				direction={{ md: 'row' }}
				gap={3}>
				{recentBooks}
			</Stack>
			<MaterialLink
				component={Link}
				to="/my-books">
				View all books
			</MaterialLink>
		</Stack>
	);
};

export default RecentBooks;
