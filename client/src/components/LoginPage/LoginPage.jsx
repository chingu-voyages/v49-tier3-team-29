import styles from './LoginPage.module.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const LoginPage = () => (
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
				SIGN IN
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
						<Button
							variant="contained"
							color="primary"
							sx={{ width: '50%' }}>
							Sign In
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
							New to Shelfshare?
						</Typography>
					</Grid>
					<Grid
						item
						xs={12}>
						<Button
							variant="contained"
							color="primary"
							component={Link}
							to="/signup"
							sx={{ width: '25%' }}>
							Sign Up
						</Button>
					</Grid>
				</Grid>
			</form>
		</Paper>
	</div>
);

export default LoginPage;
