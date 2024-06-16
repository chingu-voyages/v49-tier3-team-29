import {
	BrowserRouter as Router,
	Route,
	Routes,
	Outlet,
} from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import ForgotPasswordPage from './components/ForgotPasswordPage/ForgotPasswordPage.jsx';
import ResetPasswordPage from './components/ResetPasswordPage/ResetPasswordPage.jsx';
import MyBooks from './components/MyBooks/MyBooks.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, refreshToken } from './reducers/userSlice.js';

function App() {
	const dispatch = useDispatch();
	const { accessToken, refreshToken: storedRefreshToken } = useSelector(
		state => state.session
	);

	useEffect(() => {
		if (storedRefreshToken) {
			dispatch(refreshToken());
		}
	}, [dispatch, storedRefreshToken]);

	useEffect(() => {
		if (accessToken) {
			dispatch(fetchUser());
		}
	}, [dispatch, accessToken]);
	return (
		<>
			<ThemeProvider theme={theme}>
				<Router>
					<Routes>
						<Route
							element={
								<>
									<Navbar></Navbar>
									<Outlet></Outlet>
									<Footer></Footer>
								</>
							}>
							<Route
								path='/'
								element={<LandingPage />}
							/>
							<Route
								path='/my-books'
								element={<MyBooks />}
							/>
						</Route>
						<Route
							path='/login'
							element={<LoginPage></LoginPage>}></Route>
						<Route
							path='/signup'
							element={<SignupPage />}
						/>
						<Route
							path='/forgot-password'
							element={<ForgotPasswordPage />}
						/>
						<Route
							path='/auth/reset-password'
							element={<ResetPasswordPage />}
						/>
					</Routes>
				</Router>
			</ThemeProvider>
		</>
	);
}

export default App;
