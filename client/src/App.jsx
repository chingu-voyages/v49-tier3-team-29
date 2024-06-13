// import { useState } from 'react';
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
import UserProfile from './components/UserProfile/UserProfile.jsx';
import MyBooks from './components/MyBooks/MyBooks.jsx';

function App() {
	// const [count, setCount] = useState(0);

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
								path="/"
								element={<LandingPage />}
							/>
							<Route
								path="/user-profile"
								element={<UserProfile />}
							/>
							<Route
								path="/my-books"
								element={<MyBooks />}
							/>
						</Route>
						<Route
							path="/login"
							element={<LoginPage></LoginPage>}></Route>
						<Route
							path="/signup"
							element={<SignupPage />}
						/>
						<Route
							path="/forgot-password"
							element={<ForgotPasswordPage />}
						/>
						<Route
							path="/auth/reset-password"
							element={<ResetPasswordPage />}
						/>
					</Routes>
				</Router>
			</ThemeProvider>
		</>
	);
}

export default App;
