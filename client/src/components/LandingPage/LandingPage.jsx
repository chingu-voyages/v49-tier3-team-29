import styles from './LandingPage.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import Features from '../Features/Features';
import Hero from '../Hero/Hero';
import RecentBooks from '../RecentBooks/RecentBooks';
import RecentReviews from '../RecentReviews/RecentReviews';
import { useSelector } from 'react-redux';

const LandingPage = () => {
	const { user, accessToken } = useSelector(state => state.session);

	if (!user) {
		return <div>Loading...</div>;
	}

	let isAuthenticated = false;

	// Show Logged in components
	if (accessToken) {
		isAuthenticated = true;
	}

	return (
		<div className={styles.LandingPage}>
			<>
				<CssBaseline />
				<Box
					sx={{
						background:
							'linear-gradient(to bottom, #FFEFD5, #FFFFFF)',
					}}
					py={4}>
					<Container maxWidth='lg'>
						<Hero></Hero>
						{!isAuthenticated && (
							<>
								<Box
									mt={6}
									mb={6}
									sx={{ display: { sm: 'none' } }}>
									<Typography
										variant='h5'
										fontWeight={700}>
										Meet your next favorite book.
									</Typography>
									<Typography
										mt={3}
										variant='body1'>
										Find and read more books you{"'"}ll
										love. Be part of Shelfshare, the worlds
										largest community for readers like you.
									</Typography>
									<Button
										variant='contained'
										sx={{
											mt: 3,
											width: '80%',
											'&:hover': {
												backgroundColor: 'secondary', // Change this to your preferred color
											},
										}}
										size='large'
										component={Link}
										to='/login'>
										Sign In
									</Button>
									<Button
										variant='outlined'
										component={Link}
										to='/signup'
										size='large'
										sx={{ width: '80%', mt: 2 }}
										startIcon={
											<EmailIcon fontSize='small'></EmailIcon>
										}>
										<Typography
											noWrap
											variant='button'>
											Sign Up with email
										</Typography>
									</Button>
								</Box>
								<Features></Features>
							</>
						)}
						{isAuthenticated && (
							<>
								<RecentBooks></RecentBooks>
							</>
						)}
					</Container>
					{isAuthenticated && <RecentReviews></RecentReviews>}
				</Box>
			</>
		</div>
	);
};

export default LandingPage;
