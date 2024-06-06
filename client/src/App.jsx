// import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import ForgotPasswordPage from './components/ForgotPasswordPage/ForgotPasswordPage.jsx';
import ResetPasswordPage from './components/ResetPasswordPage/ResetPasswordPage.jsx';
import MyBooks from './components/MyBooks/MyBooks.jsx';

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<ThemeProvider theme={theme}>
				<Router>
					<Routes>
						<Route
							path="/"
							element={<LandingPage />}
						/>
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
						<Route
							path="/my-books"
							element={<MyBooks />}
						/>
					</Routes>
				</Router>
			</ThemeProvider>
		</>
	);
}

export default App;
