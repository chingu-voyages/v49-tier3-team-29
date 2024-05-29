import styles from './LandingPage.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Features from './Features';
import Hero from './Hero';
import Navbar from './Navbar';
import Footer from './Footer';

const LandingPage = () => (
	<div className={styles.LandingPage}>
		<>
			<CssBaseline />
			<Navbar></Navbar>
			<Box
				sx={{
					background: 'linear-gradient(to bottom, #FFEFD5, #FFFFFF)',
				}}
				py={4}>
				<Container maxWidth="lg">
					<Hero></Hero>
					<Box
						mt={6}
						mb={6}
						sx={{ display: { sm: 'none' } }}>
						<Typography
							variant="h5"
							fontWeight={700}>
							Meet your next favorite book.
						</Typography>
						<Typography mt={3}>
							Find and read more books youll love. Be part of
							Shelfshare, the world largest community for readers
							like you.
						</Typography>
						<Button
							variant="contained"
							sx={{
								mt: 3,
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
						<Button
							variant="outlined"
							component={Link}
							to="/signup"
							size="large"
							sx={{ width: '80%', mt: 2 }}
							startIcon={
								<EmailIcon fontSize="small"></EmailIcon>
							}>
							<Typography
								noWrap
								variant="button">
								Sign Up with email
							</Typography>
						</Button>
					</Box>
					<Divider></Divider>
					<Features></Features>
				</Container>
			</Box>
			<Footer></Footer>
		</>
	</div>
);

export default LandingPage;
