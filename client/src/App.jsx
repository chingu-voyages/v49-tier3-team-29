// import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import CompletedPage from './components/reading-list-pages/CompletedPage/CompletedPage.jsx';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';
import CurrentlyReadingPage from './components/reading-list-pages/CurrentlyReadingPage/CurrentlyReadingPage.jsx';
import WantToReadPage from './components/reading-list-pages/WantToReadPage/WantToReadPage.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import ForgotPasswordPage from './components/ForgotPasswordPage/ForgotPasswordPage.jsx';
import ResetPasswordPage from './components/ResetPasswordPage/ResetPasswordPage.jsx';

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<div
				style={{
					position: 'fixed',
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					background: 'linear-gradient(to bottom, #FFEFD5, #f0f0f0)',
				}}>
				<ThemeProvider theme={theme}>
					<Router>
						<Routes>
              <Route
                path="/"
                element={<LandingPage />}
              />
							<Route
								path="/"
								element={<LoginPage />}
							/>
							<Route
								path="/signup"
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
							<Route
								path="/completed"
								element={<CompletedPage />}
							/>
							<Route
								path="/currently-reading"
								element={<CurrentlyReadingPage />}
							/>
							<Route
								path="/want-to-read"
								element={<WantToReadPage />}
							/>
						</Routes>
					</Router>
				</ThemeProvider>
			</div>
		</>
	);
}

export default App;
