import {
	Card,
	CardContent,
	CardHeader,
	Container,
	Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
const userReviews = [
	{
		avatar: <AccountCircle></AccountCircle>,
		name: 'Remy Sharp',
		title: 'Book Title',
		reviewTitle: 'Review Title',
		review: "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
	},
	{
		avatar: <AccountCircle></AccountCircle>,
		name: 'Travis Howard',
		title: 'Book Title',
		reviewTitle: 'Review Title',
		review: "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",
	},
	{
		avatar: <AccountCircle></AccountCircle>,
		name: 'Cindy Baker',
		title: 'Book Title',
		reviewTitle: 'Review Title',
		review: 'The level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.',
	},
];
const UserReviewed = () => {
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
						See what users are saying about books you've interacted
						with. Discover reviews that can offer insightful
						analysis of a book's strengths and weaknesses, prompting
						you to consider aspects you might have missed while
						reading.
					</Typography>
				</Box>
				<Grid
					container
					spacing={2}>
					{userReviews.map((review, index) => (
						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							key={index}
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
									<Typography>
										{review.reviewTitle}
									</Typography>
									<Typography variant="body2">
										{review.review}
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
										avatar={review.avatar}
										title={review.name}
										subheader={review.title}
										subheaderTypographyProps={{
											color: 'inherit',
											fontWeight: 'bold',
											textAlign: 'left',
										}}
									/>
								</Box>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};
export default UserReviewed;
