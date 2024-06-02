import styles from './SignupPage.module.css';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const SignupPage = () => {
	return (
		<div>
			<Paper
				elevation={3}
				className={styles.paper}>
				<Typography
					variant="h2"
					component="h2"
					align="center"
					gutterBottom>
					shelf<span style={{ fontWeight: 'bold' }}>share</span>
				</Typography>
				<Typography
					variant="body1"
					component="p"
					align="center"
					gutterBottom>
					CREATE ACCOUNT
				</Typography>
				<form className={styles.form}>
					<Grid
						container
						spacing={2}>
						<Grid
							item
							xs={12}>
							<TextField
								variant="outlined"
								label="Your Name"
								fullWidth
								autoFocus
								sx={{ width: '50%' }}
							/>
						</Grid>
						<Grid
							item
							xs={12}>
							<TextField
								variant="outlined"
								label="Email"
								fullWidth
								autoFocus
								sx={{ width: '50%' }}
							/>
						</Grid>
						<Grid
							item
							xs={12}>
							<TextField
								variant="outlined"
								label="Password"
								type="password"
								fullWidth
								sx={{ width: '50%' }}
							/>
						</Grid>
						<Grid
							item
							xs={12}>
							<TextField
								variant="outlined"
								label="Re-enter Password"
								type="password"
								fullWidth
								sx={{ width: '50%' }}
							/>
						</Grid>
						<Grid
							item
							xs={12}>
							<Button
								variant="contained"
								color="primary"
								sx={{ width: '50%' }}
								component={Link}
								to="/" // TO-DO: Update to Landing Page
							>
								Create Account
							</Button>
						</Grid>
						<Grid
							item
							xs={12}>
							<Typography
								variant="body1"
								component="p"
								align="center"
								gutterBottom>
								Already have an account?{' '}
								<Link
									to="/"
									style={{ fontWeight: 'bold' }}>
									Sign In
								</Link>
							</Typography>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</div>
	);
};

export default SignupPage;
