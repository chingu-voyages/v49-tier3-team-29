import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

const Navbar = () => (
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
						<span style={{ fontWeight: 'bold' }}>share</span>
					</Typography>
				</Box>
			</Toolbar>
			{/* Login/SignUp Card Large Screen*/}
			<Card
				variant="outlined"
				sx={{
					display: { xs: 'none', sm: 'block' },
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
					<Typography variant="h6">Discover & read more</Typography>
					<Button
						variant="outlined"
						component={Link}
						to="/signup"
						size="large"
						sx={{ width: '80%', mt: 3 }}
						startIcon={<EmailIcon fontSize="small"></EmailIcon>}>
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
);

export default Navbar;
