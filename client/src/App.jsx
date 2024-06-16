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
import SearchPage from './components/SearchPage/SearchPage.jsx';
import MyBooks from './components/MyBooks/MyBooks.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { refreshToken, fetchUser } from './reducers/userSlice.js';

function App() {
	const dispatch = useDispatch();
	const {
		accessToken,
		refreshToken: storedRefreshToken,
		user,
	} = useSelector(state => state.session);

	const [initialLoad, setInitialLoad] = useState(true);

	useEffect(() => {
		if (initialLoad) {
			if (storedRefreshToken || !user.username) {
				dispatch(refreshToken());
			}
		}
	}, [dispatch, storedRefreshToken, user.username, initialLoad]);

	useEffect(() => {
		if (!user.username && storedRefreshToken) {
			dispatch(refreshToken()).then(() => {
				if (accessToken) {
					dispatch(fetchUser());
				}
			});
		}
	}, [dispatch, storedRefreshToken, accessToken, user.username]);

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
								path='/search'
								element={<SearchPage />}
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
			<ToastContainer
				position='top-right'
				autoClose={2500}
			/>
		</>
	);
}

export default App;
