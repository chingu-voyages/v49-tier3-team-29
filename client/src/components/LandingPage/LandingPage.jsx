import styles from './LandingPage.module.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import GitHubIcon from '@mui/icons-material/GitHub';
import MaterialLink from '@mui/material/Link';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import theme from '../../theme';

const LandingPage = () => (
	<div className={styles.LandingPage}>
		<>
			<CssBaseline />
			{/* Navbar Header */}
			<AppBar
				sx={{
					boxShadow: 0,
					position: 'static',
				}}>
				<Container
					maxWidth="md"
					sx={{ position: 'relative' }}>
					<Toolbar
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							flexShrink: 0,
						}}>
						<Box>
							<Typography
								variant="h4"
								fontWeight={200}>
								shelf
								<span style={{ fontWeight: 'bold' }}>
									share
								</span>
							</Typography>
						</Box>
					</Toolbar>
					{/* Card */}
					<Card
						variant="outlined"
						sx={{
							position: 'absolute',
							right: '0',
							top: '0',
							mt: 2,
							mr: 2,
							width: '300px',
							padding: 2,
							zIndex: 1,
						}}>
						<Stack
							direction={'column'}
							spacing={2}
							justifyContent={'center'}
							alignItems={'center'}>
							<Typography variant="h6">
								Discover & read more
							</Typography>
							<Button
								variant="outlined"
								component={Link}
								to="/signup"
								size="large"
								sx={{ width: '80%', mt: 3 }}
								startIcon={
									<EmailIcon fontSize="small"></EmailIcon>
								}>
								<Typography
									noWrap
									variant="button">
									Sign Up with email
								</Typography>
							</Button>

							<Button
								variant="contained"
								sx={{
									mt: 2,
									width: '80%',
									'&:hover': {
										backgroundColor: 'secondary', // Change this to your preferred color
									},
								}}
								size="large"
								component={Link}
								to="/login">
								Sign In
							</Button>
						</Stack>
					</Card>
					{/* Card End */}
				</Container>
			</AppBar>
			{/* Navbar Header End */}

			{/* Main Content */}
			<Box
				sx={{
					background: 'linear-gradient(to bottom, #FFEFD5, #FFFFFF)',
				}}
				py={4}>
				<Container maxWidth="lg">
					<Box
						sx={{
							height: '400px',
						}}>
						<Stack
							position={'absolute'}
							spacing={3}>
							<Box textAlign={'left'}>
								<Typography variant="h3">
									<span style={{ fontStyle: 'italic' }}>
										What are users reading?
									</span>
								</Typography>
							</Box>
							<Stack
								direction={'row'}
								spacing={4}>
								<Box
									sx={{
										bgcolor: theme.palette.primary.main,
										width: '200px',
										height: '300px',
									}}></Box>
								<Box
									sx={{
										bgcolor: theme.palette.primary.main,
										width: '200px',
										height: '300px',
									}}></Box>
								<Box
									sx={{
										bgcolor: theme.palette.primary.main,
										width: '200px',
										height: '300px',
									}}></Box>
								<Box
									sx={{
										bgcolor: theme.palette.primary.main,
										width: '200px',
										height: '300px',
									}}></Box>
								<Box
									sx={{
										bgcolor: theme.palette.primary.main,
										width: '200px',
										height: '300px',
									}}></Box>
							</Stack>
						</Stack>
					</Box>
				</Container>
			</Box>

			{/* Main Content End */}

			{/* Footer */}
			<Box>
				<Container
					maxWidth="lg"
					sx={{
						py: '24px',
						display: 'flex',
						justifyContent: 'center',
					}}>
					<Box>
						<MaterialLink
							href="https://github.com/chingu-voyages/v49-tier3-team-29"
							underline="none"
							target="_blank"
							rel="noopener"
							sx={{
								display: 'flex',
								gap: '8px',
							}}>
							<GitHubIcon></GitHubIcon>
							Github
						</MaterialLink>
					</Box>
				</Container>
			</Box>
			{/* Footer End */}
		</>
	</div>
);

export default LandingPage;
