import { ButtonBase, Card, CardContent, Grid, Typography } from '@mui/material';
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
	const selectedUser = useSelector(state => state.session.user);
	return (
		<div
			style={{
				padding: 25,
				position: 'fixed',
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				background: 'linear-gradient(to bottom, #FFEFD5, #f0f0f0)',
			}}>
			<Grid
				container
				spacing={2}>
				{/* Left card */}
				<Grid
					item
					xs={12}
					sm={4}>
					{' '}
					{/* xs={12} for full width on small screens */}
					<Card>
						<CardContent>
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
						</CardContent>
					</Card>
				</Grid>

				{/* Right card */}
				<Grid
					item
					xs={12}
					sm={8}>
					{' '}
					<Card>
						<CardContent>
							<Typography variant="h6">
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
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
};

export default UserProfile;
