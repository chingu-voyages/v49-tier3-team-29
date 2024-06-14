import { Box, ButtonBase, CssBaseline, Grid, Typography } from '@mui/material';
import styles from './UserProfile.module.css';
import { useSelector } from 'react-redux';
import ReviewTableComponent from '../shared/ReviewTableComponent/ReviewTableComponent';

const testReviews = [
	{
		cover: 'https://images.blinkist.io/images/books/595a0a96b238e100069fb34b/1_1/470.jpg',
		title: 'The Inner Game of Tennis',
		rating: 5,
		text: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'`,
		created_at: 'date',
	},
	{
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386925632i/44936.jpg',
		title: 'Refactoring, Improving the Design of Existing Code',
		rating: 4,
		text: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'`,
		created_at: 'new Date(),',
	},
	{
		cover: 'https://images.blinkist.io/images/books/595a0a96b238e100069fb34b/1_1/470.jpg',
		title: 'The Inner Game of Tennis',
		rating: 5,
		text: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'`,
		created_at: 'new Date(),',
	},
	{
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442953450i/420297.jpg',
		title: 'Curious George',
		rating: 3,
		text: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'`,
		created_at: 'new Date(),',
	},
	{
		cover: 'https://images.blinkist.io/images/books/595a0a96b238e100069fb34b/1_1/470.jpg',
		title: 'The Inner Game of Tennis',
		rating: 5,
		text: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'`,
		created_at: 'new Date(),',
	},
	{
		cover: 'https://images.blinkist.io/images/books/595a0a96b238e100069fb34b/1_1/470.jpg',
		title: 'The Inner Game of Tennis',
		rating: 5,
		text: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'`,
		created_at: 'date',
	},
	{
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386925632i/44936.jpg',
		title: 'Refactoring, Improving the Design of Existing Code',
		rating: 4,
		text: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'`,
		created_at: 'new Date(),',
	},
	{
		cover: 'https://images.blinkist.io/images/books/595a0a96b238e100069fb34b/1_1/470.jpg',
		title: 'The Inner Game of Tennis',
		rating: 5,
		text: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'`,
		created_at: 'new Date(),',
	},
	{
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442953450i/420297.jpg',
		title: 'Curious George',
		rating: 3,
		text: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'`,
		created_at: 'new Date(),',
	},
	{
		cover: 'https://images.blinkist.io/images/books/595a0a96b238e100069fb34b/1_1/470.jpg',
		title: 'The Inner Game of Tennis',
		rating: 5,
		text: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'`,
		created_at: 'new Date(),',
	},
];

const testUser = {
	username: 'test_username',
	email: 'test@email.com',
	password: 'password',
	name: 'name',
	created_at: new Date(),
	isActive: true,
	passwordResetToken: 'resetToken',
	passwordResetExpires: new Date(),
};

const profileImage =
	'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=';

const UserProfile = () => {
	let selectedUser = useSelector(state => state.session.user);
	if (!selectedUser) {
		selectedUser = testUser;
		// return <Redirect to="/login" />;
	}
	return (
		<div>
			<CssBaseline />
			<Box
				sx={{
					background: 'linear-gradient(to bottom, #FFEFD5, #FFFFFF)',
				}}
				py={4}>
				<Grid
					container
					spacing={2}>
					<Grid
						item
						xs={12}
						sm={4}>
						<Box sx={{ marginLeft: 2, marginRight: 2 }}>
							<ButtonBase>
								<img
									src={profileImage}
									className={styles.profileImageLarge}
									alt="Profile"
								/>
							</ButtonBase>
							<Typography variant="h6">
								{testUser.username}
							</Typography>
							<Typography variant="body1">
								{testUser.email}
							</Typography>
						</Box>
					</Grid>

					<Grid
						item
						xs={12}
						sm={8}>
						<Box
							sx={{
								marginLeft: 2,
								marginRight: 10,
								textAlign: 'left',
							}}>
							<Typography variant="h4">
								{testUser.name}
							</Typography>
							<Typography variant="body2">
								Member Since:{' '}
								{testUser.created_at.toLocaleDateString(
									'en-US',
									{
										year: 'numeric',
										month: 'long',
									}
								)}
							</Typography>
							<hr />
							<Typography variant="h6">{`${testUser.name}'s Reviews (${testReviews.length})`}</Typography>
							<ReviewTableComponent
								reviews={testReviews}></ReviewTableComponent>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default UserProfile;
