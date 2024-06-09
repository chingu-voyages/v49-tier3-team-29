import styles from './LoginPage.module.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../reducers/userSlice';

const LoginPage = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const handleSubmission = async () => {
		const userCredentials = {
			username,
			password,
		};
		await dispatch(loginUser(userCredentials));
	};

	const handleDemoUser = async () => {
		const userCredentials = {
			username: import.meta.env.VITE_DEMO_USERNAME,
			password: import.meta.env.VITE_DEMO_PASSWORD,
		};
		console.log(userCredentials);

		await dispatch(loginUser(userCredentials));
	};

	return (
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
			<Paper
				elevation={3}
				className={styles.paper}>
				<Typography
					variant='h2'
					component='h2'
					align='center'
					gutterBottom>
					shelf<span style={{ fontWeight: 'bold' }}>share</span>
				</Typography>
				<Typography
					variant='body1'
					component='p'
					align='center'
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
								variant='outlined'
								label='Username'
								fullWidth
								autoFocus
								value={username}
								onChange={e => setUsername(e.target.value)}
								sx={{ width: '50%' }}
							/>
						</Grid>
						<Grid
							item
							xs={12}>
							<TextField
								variant='outlined'
								label='Password'
								type='password'
								fullWidth
								value={password}
								onChange={e => setPassword(e.target.value)}
								sx={{ width: '50%' }}
							/>
						</Grid>
						<Grid
							item
							xs={12}>
							<Typography
								variant='body1'
								component={Link}
								align='center'
								gutterBottom
								to='/forgot-password'>
								Forgot password
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}>
							<Button
								variant='contained'
								color='primary'
								onClick={() => {
									if (username === '' || password === '') {
										alert('Please fill out all fields');
										return;
									}
									handleSubmission();
								}}
								sx={{ width: '50%' }}>
								Sign In
							</Button>
						</Grid>
						<Grid
							item
							xs={12}>
							<Button
								variant='outlined'
								size='medium'
								onClick={handleDemoUser}>
								<span
									style={{
										fontWeight: 'bold',
										color: 'blue',
									}}>
									Demo user
								</span>
							</Button>
						</Grid>
						<Grid
							item
							xs={12}>
							<Typography
								variant='body1'
								component='p'
								align='center'
								gutterBottom>
								New to Shelfshare?
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}>
							<Button
								variant='contained'
								color='primary'
								component={Link}
								to='/signup'
								sx={{ width: '25%' }}>
								Sign Up
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</div>
	);
};

export default LoginPage;
