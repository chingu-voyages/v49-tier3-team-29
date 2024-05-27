import { createTheme } from '@mui/material/styles';

// Define your custom theme using createTheme
const theme = createTheme({
	palette: {
		primary: {
			main: '#9A3636', // primary color: POISONOUS APPLE
		},
		secondary: {
			main: '#FFEFD5', // Set secondary color: PAPAYA WHIP
		},
	},
	typography: {
		fontFamily: 'Roboto, sans-serif', // Set default font family
	},
});

export default theme;
