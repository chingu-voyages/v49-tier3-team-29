import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import MaterialLink from '@mui/material/Link';
import { Link } from 'react-router-dom';

const RecentReviews = () => {
	const books = useSelector(state => state.book.bookInfo);
	let top3Books = [];

	// Function to calculate average rating of books
	function calculateAverageRating(reviews) {
		const totalRating = reviews.reduce(
			(acc, review) => acc + review.rating,
			0
		);
		return totalRating / reviews.length;
	}

	if (books.length > 0) {
		// Sort the books by average rating in descending order
		const booksCopy = books.toSorted(
			(a, b) =>
				calculateAverageRating(b.reviews) -
				calculateAverageRating(a.reviews)
		);
		// Get the top 3 books (highest average rating)
		top3Books = booksCopy.slice(0, 3);
	}

	return (
		<Box sx={{ backgroundColor: 'primary.main', color: 'secondary.main' }}>
			<Container
				id="testimonials"
				sx={{
					pt: { xs: 4, sm: 12 },
					pb: { xs: 8, sm: 16 },
					position: 'relative',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: { xs: 3, sm: 6 },
				}}>
				<Box
					sx={{
						width: { xs: '100%', sm: '60%' },
						textAlign: { xs: 'left', sm: 'center' },
					}}>
					<Typography
						component="h2"
						variant="h4">
						Reviews
					</Typography>
					<Typography
						variant="body1"
						sx={{ color: 'primary.main.400' }}>
						See what users are saying about books you might like.
						Book reviews can expose you to different perspectives on
						a book{"'"}s plot, characters, and writing style,
						helping you decide if it aligns with your reading
						preferences. In short, they can be a compass to navigate
						the vast sea of new releases and find books you{"'"}ll
						truly enjoy.
					</Typography>
				</Box>
				<Grid
					container
					spacing={2}>
					{top3Books.length > 0 ? (
						top3Books.map(book => (
							<Grid
								item
								xs={12}
								md={4}
								key={book.reviews[0]._id}
								sx={{ display: 'flex' }}>
								<Card
									sx={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'space-between',
										border: '1px solid',
										borderColor: 'secondary.main',
										background: 'transparent',
										backgroundColor: 'primary.main.500',
										flexGrow: 1,
										color: 'secondary.main',
										p: 1,
									}}>
									<CardContent>
										<Typography
											variant="h6"
											mb={2}>
											{book.reviews[0].title}
										</Typography>
										<Typography variant="body2">
											{book.reviews[0].body}
										</Typography>
									</CardContent>
									<Box
										sx={{
											display: 'flex',
											flexDirection: 'row',
											justifyContent: 'space-between',
											pr: 2,
										}}>
										<CardHeader
											avatar={
												<Avatar
													src={
														book.reviews[0].userId
															.image
													}></Avatar>
											}
											title={book.reviews[0].userId.name}
											subheader={
												<MaterialLink
													component={Link}
													to={'/'}
													color={'#ffffff'}>
													{book.title}
												</MaterialLink>
											}
											subheaderTypographyProps={{
												color: 'inherit',
												fontWeight: 'bold',
												textAlign: 'left',
											}}
											titleTypographyProps={{
												textAlign: 'left',
											}}
										/>
									</Box>
								</Card>
							</Grid>
						))
					) : (
						<Typography
							variant="h6"
							width={'100%'}
							mt={4}>
							No Reviews to display at this time. Please try again
							later...
						</Typography>
					)}
				</Grid>
			</Container>
		</Box>
	);
};
export default RecentReviews;
