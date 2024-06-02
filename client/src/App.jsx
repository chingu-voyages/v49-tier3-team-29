// import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import CompletedPage from './components/CompletedPage/CompletedPage';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';

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
								element={<LoginPage />}
							/>
							<Route
								path="/signup"
								element={<SignupPage />}
							/>
							<Route
								path="/completed"
								element={<CompletedPage />}
							/>
						</Routes>
					</Router>
				</ThemeProvider>
			</div>
		</>
	);
}

export default App;
