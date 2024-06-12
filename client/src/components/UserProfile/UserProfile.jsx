import { Box, ButtonBase, CssBaseline, Grid, Typography } from '@mui/material';
import styles from './UserProfile.module.css';
import { useSelector } from 'react-redux';

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
								marginRight: 2,
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
							<Typography variant="h6">{`${testUser.name}'s reviews`}</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default UserProfile;
