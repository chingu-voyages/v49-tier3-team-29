// import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';
import LandingPage from './components/LandingPage/LandingPage.jsx';

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
					</Routes>
				</Router>
			</ThemeProvider>
		</>
	);
}

export default App;
