import styles from './SignupPage.module.css';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { registerUser } from '../../reducers/userSlice';

const SignupPage = () => {
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordVerifier, setPasswordVerifier] = useState('');
	const dispatch = useDispatch();

	const handleSubmission = async e => {
		e.preventDefault();
		if (password !== passwordVerifier) {
			alert('Passwords do not match');
		}
		const userDetails = {
			name,
			email,
			password,
			username,
		};
		await dispatch(registerUser(userDetails));
	};
	return (
		<div>
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
								label='Your Name'
								fullWidth
								autoFocus
								value={name}
								onChange={e => setName(e.target.value)}
								sx={{ width: '50%' }}
							/>
						</Grid>
						<Grid
							item
							xs={12}>
							<TextField
								variant='outlined'
								label='Email'
								fullWidth
								autoFocus
								value={email}
								onChange={e => setEmail(e.target.value)}
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
							<TextField
								variant='outlined'
								label='Re-enter Password'
								type='password'
								fullWidth
								value={passwordVerifier}
								onChange={e =>
									setPasswordVerifier(e.target.value)
								}
								sx={{ width: '50%' }}
							/>
						</Grid>
						<Grid
							item
							xs={12}>
							<Button
								variant='contained'
								color='primary'
								sx={{ width: '50%' }}
								component={Link}
								onClick={handleSubmission}
								to='/' // TO-DO: Update to Landing Page
							>
								Create Account
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
								Already have an account?{' '}
								<Link
									to='/'
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
