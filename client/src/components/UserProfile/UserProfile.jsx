import { Grid, Paper, Typography } from '@mui/material';
import styles from './UserProfile.module.css';
import theme from '../../theme';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

let selectedUser;

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
	'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA0L2pvYjk2OS02LXYuanBn.jpg';

const UserProfile = () => (
	<div
		style={{
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
			direction="column"
			alignItems="left"
			style={{ marginLeft: '150px' }}
			spacing={12}>
			<Grid
				container
				direction="row"
				alignItems="center"
				style={{ margin: '30px' }}
				spacing={3}>
				<Grid item>
					<div className={styles.profileContainer}>
						<img
							src={profileImage}
							className={styles.profileImage}
							alt="Profile"
						/>
					</div>
				</Grid>
				<Paper
					sx={{
						margin: '10px',
						maxWidth: '500px',
						padding: '20px',
					}}>
					<Grid item>
						<Typography
							variant="body1"
							component="p"
							fontFamily={theme.typography.fontFamily}
							gutterBottom
							align="left">
							Username: {testUser.username}
						</Typography>
						<Typography
							variant="body1"
							component="p"
							fontFamily={theme.typography.fontFamily}
							gutterBottom
							align="left">
							Joined:{' '}
							{testUser.created_at.toLocaleString('en-US', {
								month: 'long',
							})}{' '}
							{testUser.created_at.getFullYear()}
						</Typography>
					</Grid>
				</Paper>
			</Grid>

			<Paper
				sx={{
					margin: '10px',
					maxWidth: '50%',
				}}>
				<Grid
					container
					direction="column"
					alignItems="center"
					spacing={3}>
					<Grid item>
						<Typography
							variant="h5"
							gutterBottom>
							User Bookshelves
						</Typography>
					</Grid>
					<Grid
						item
						container
						justifyContent="space-around">
						<Grid item>
							<Link to="/completed">
								<Typography
									variant="body1"
									component="div"
									align="center">
									Completed
								</Typography>
							</Link>
						</Grid>
						<Grid item>
							<Link to="/want-to-read">
								<Typography
									variant="body1"
									component="div"
									align="center">
									Want to Read
								</Typography>
							</Link>
						</Grid>
						<Grid item>
							<Link to="/currently-reading">
								<Typography
									variant="body1"
									component="div"
									align="center">
									Currently Reading
								</Typography>
							</Link>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	</div>
);

export default UserProfile;
