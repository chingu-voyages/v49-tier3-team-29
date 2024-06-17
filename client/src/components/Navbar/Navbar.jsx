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
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import theme from '../../theme';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import { useSelector } from 'react-redux';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';
import { fetchBook } from '../../reducers/bookSlice';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../reducers/userSlice';

const Navbar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [anchorEl, setAnchorEl] = useState(null);
	const [searchTerm, setSearchTerm] = useState('');

	// Check is user exists in store
	const { user, accessToken } = useSelector(state => state.session);

	let isAuthenticated = false;
	if (accessToken) {
		isAuthenticated = true;
	}

	const handleMenu = event => {
		setAnchorEl(event.target);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleChange = event => {
		event.preventDefault();
		setSearchTerm(event.target.value);
	};

	const handleSubmit = async event => {
		event.preventDefault();

		searchTerm.trim();

		if (!searchTerm) {
			return alert('Please enter a search term');
		}

		// fetch book data
		await dispatch(fetchBook(searchTerm));
		// clear search term
		setSearchTerm('');

		// redirect to search page
		navigate('/search');
	};

	const handleLogout = () => {
		alert('You are logged out.');
		dispatch(logoutUser());
	};

	return (
		<AppBar
			sx={{
				position: 'static',
				boxShadow: 0,
			}}>
			<Container
				maxWidth='md'
				sx={{ position: 'relative' }}>
				<Toolbar
					sx={{
						flexShrink: 0,
						display: 'flex',
						justifyContent: {
							xs: 'space-evenly',
							sm: isAuthenticated ? 'space-evenly' : 'left',
						},
					}}>
					{isAuthenticated && (
						<IconButton
							color='inherit'
							sx={{ display: { sm: 'none' } }}>
							<SearchIcon fontSize='large'></SearchIcon>
						</IconButton>
					)}

					<Box>
						<Typography
							variant='h4'
							fontWeight={200}>
							shelf
							<span style={{ fontWeight: 'bold' }}>share</span>
						</Typography>
					</Box>
					{isAuthenticated && (
						<>
							<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
								<Button
									sx={{ color: 'white' }}
									component={Link}
									onClick={() => setSearchTerm('')}
									to='/'>
									Home
								</Button>
								<Button
									sx={{ color: 'white' }}
									component={Link}
									to='/my-books'>
									My Books
								</Button>
							</Box>
							<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
								<form onSubmit={handleSubmit}>
									<Box
										sx={{
											position: 'relative',
											borderRadius:
												theme.shape.borderRadius,
											backgroundColor: alpha(
												theme.palette.common.white,
												0.15
											),
											'&:hover': {
												backgroundColor: alpha(
													theme.palette.common.white,
													0.25
												),
											},
											marginLeft: 0,
											width: '100%',
											[theme.breakpoints.up('sm')]: {
												marginLeft: theme.spacing(1),
												width: 'auto',
											},
										}}>
										<Box
											sx={{
												padding: theme.spacing(0, 2),
												height: '100%',
												position: 'absolute',
												pointerEvents: 'none',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
											}}>
											<SearchIcon />
										</Box>
										<InputBase
											placeholder='Search…'
											onChange={handleChange}
											sx={{
												color: 'inherit',
												width: '100%',
												'& .MuiInputBase-input': {
													padding: theme.spacing(
														1,
														1,
														1,
														0
													),
													// vertical padding + font size from searchIcon
													paddingLeft: `calc(1em + ${theme.spacing(
														4
													)})`,
													transition:
														theme.transitions.create(
															'width'
														),
													[theme.breakpoints.up(
														'sm'
													)]: {
														// on screen sizes sm and up width starts at 12 characters and moves to 20 on focus
														width: '12ch',
														'&:focus': {
															width: '20ch',
														},
													},
												},
											}}
											inputProps={{
												'aria-label': 'search',
											}}
										/>
									</Box>
								</form>
							</Box>

							<Tooltip title='Open Account Options'>
								<IconButton
									color='inherit'
									aria-label='account of current user'
									aria-controls='menu-appbar'
									aria-haspopup='true'
									onClick={handleMenu}>
									{user.userImage ? (
										<Avatar
											fontSize='large'
											src={user.userImage}></Avatar>
									) : (
										<AccountCircle fontSize='large'></AccountCircle>
									)}
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: '45px' }}
								id='menu-appbar'
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorEl)}
								onClose={handleClose}>
								<MenuItem onClick={handleClose}>
									Profile
								</MenuItem>
								<MenuItem
									onClick={handleClose}
									component={Link}
									to='/my-books'>
									My Books
								</MenuItem>
								<Divider></Divider>
								<MenuItem onClick={handleLogout}>
									Logout
								</MenuItem>
							</Menu>
						</>
					)}
				</Toolbar>

				{!isAuthenticated && (
					<Card
						variant='outlined'
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
							<Typography variant='h6'>
								Discover & read more
							</Typography>
							<Button
								variant='outlined'
								component={Link}
								to='/signup'
								size='large'
								sx={{ width: '80%', mt: 3 }}
								startIcon={
									<EmailIcon fontSize='small'></EmailIcon>
								}>
								<Typography
									noWrap
									variant='button'>
									Sign Up with email
								</Typography>
							</Button>

							<Button
								variant='contained'
								sx={{
									mt: 2,
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
						</Stack>
					</Card>
				)}
			</Container>
			{isAuthenticated && (
				<Toolbar
					sx={{
						boxShadow: 3,
						display: { xs: 'flex', sm: 'none' },
						justifyContent: 'space-around',
					}}>
					<Button
						sx={{ color: 'white' }}
						component={Link}
						onClick={() => setSearchTerm('')}
						to='/'>
						Home
					</Button>
					<Button
						sx={{ color: 'white' }}
						component={Link}
						to='/my-books'>
						My Books
					</Button>
				</Toolbar>
			)}
		</AppBar>
	);
};

export default Navbar;
