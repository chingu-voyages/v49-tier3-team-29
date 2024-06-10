import styles from './ForgotPasswordPage.module.css';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { Button, TextField } from '@mui/material';

function ForgotPasswordPage() {
	const [email, setEmail] = useState('');
	const fetchForgotPasswordApi = async () => {
		await fetch('http://localhost:5001/auth/forgot-password', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email: email }),
		}).then(response => {
			console.log(response);
			if (response.status === 404) {
				alert(
					'User not found. Please check if the email address is correct.'
				);
			} else if (response.status === 200) {
				alert(
					'Successfully sent password reset email. Please check your email inbox.'
				);
			}
		});
	};

	const onSubmit = event => {
		event.preventDefault();
		fetchForgotPasswordApi();
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
					gutterBottom></Typography>{' '}
				<Typography
					variant='body2'
					component='p'
					align='center'
					gutterBottom>
					To reset password, type your email address below.
				</Typography>
				<form
					className={styles.form}
					onSubmit={onSubmit}>
					<Grid
						container
						spacing={2}>
						<Grid
							item
							xs={12}>
							<TextField
								variant='outlined'
								value={email}
								label='Enter your email address...'
								fullWidth
								sx={{ width: '80%' }}
								onChange={event => {
									setEmail(event.target.value);
								}}
							/>
						</Grid>
						<Grid
							align='center'
							item
							xs={12}>
							{' '}
							<Button
								type='submit'
								variant='contained'
								color='primary'
								sx={{ width: '80%' }}>
								Submit
							</Button>
						</Grid>
						<Grid
							item
							xs={12}></Grid>
						<Grid
							item
							xs={12}></Grid>
					</Grid>
				</form>
			</Paper>
		</div>
	);
}
export default ForgotPasswordPage;
