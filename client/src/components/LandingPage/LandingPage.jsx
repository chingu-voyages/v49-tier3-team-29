import React from 'react';
import styles from './LandingPage.module.css';
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	Card,
	Button,
	Divider,
	Container,
	CssBaseline,
	Link,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const LandingPage = () => (
	<div
		className={styles.LandingPage}
		data-testid="LandingPage">
		<>
			<CssBaseline />
			{/* Navbar Header */}
			<AppBar
				sx={{
					bgcolor: '#BCB8B1',
					boxShadow: 0,
					backgroundImage: 'none',
					position: 'static',
				}}>
				<Container maxWidth="lg">
					<Toolbar
						sx={{
							bgcolor: '#BCB8B1',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							flexShrink: 0,
							backdropFilter: 'blur(24px)',
							maxHeight: 40,
						}}>
						<Box sx={{ color: '#463F3A' }}>
							<Typography
								variant="h5"
								fontWeight={'500'}>
								Shelf Share
							</Typography>
						</Box>

						{/* Card */}
						<Card
							variant="outlined"
							sx={{
								position: 'absolute',
								right: '64px',
								top: '36px',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								maxWidth: '350px',
								padding: '16px',
								gap: '24px',
							}}>
							<Typography
								color={'#463F3A'}
								fontWeight={'700'}>
								Discover & read more
							</Typography>
							<Button
								variant="outlined"
								sx={{
									borderColor: '#463F3A',
									color: '#463F3A',
									'&:hover': {
										borderColor: '#8A817C', // Change this to your preferred color
										color: '#8A817C',
									},
								}}
								size="large">
								Sign Up with email
							</Button>
							<Divider
								variant="middle"
								flexItem
								sx={{ backgroundColor: '#463F3A' }}></Divider>
							<Button
								variant="contained"
								sx={{
									bgcolor: '#463F3A',
									'&:hover': {
										backgroundColor: '#8A817C', // Change this to your preferred color
									},
								}}
								size="large">
								Sign In
							</Button>
						</Card>
						{/* Card End */}
					</Toolbar>
				</Container>
			</AppBar>
			{/* Navbar Header End */}

			<Divider></Divider>

			{/* Main Content */}
			<Box>
				<Typography>Book Images</Typography>
			</Box>
			{/* Main Content End */}

			<Divider></Divider>

			{/* Footer */}
			<Box sx={{ position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
				<Container
					maxWidth="lg"
					sx={{
						my: '24px',
						display: 'flex',
						justifyContent: 'center',
					}}>
					<Box>
						<Link
							href="https://github.com/chingu-voyages/v49-tier3-team-29"
							underline="none"
							target="_blank"
							rel="noopener"
							sx={{
								color: 'black',
								display: 'flex',
								gap: '8px',
							}}>
							<GitHubIcon></GitHubIcon>
							Github
						</Link>
					</Box>
				</Container>
			</Box>
			{/* Footer End */}
		</>
	</div>
);

export default LandingPage;
