import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import theme from '../../theme';

const Hero = () => (
	<Box>
		<Box textAlign={{ lg: 'left' }}>
			<Typography variant="h5">
				What are users{' '}
				<span
					style={{
						color: theme.palette.primary.main,
					}}>
					reading?
				</span>
			</Typography>
		</Box>
		<Grid
			mt={3}
			container
			xs={12}
			justifyContent={'space-between'}>
			<Paper
				elevation={5}
				sx={{
					bgcolor: theme.palette.primary.main,
					width: { xs: '68px', lg: '200px' },
					height: { xs: '125px', lg: '300px' },
				}}></Paper>
			<Paper
				elevation={5}
				sx={{
					bgcolor: theme.palette.primary.main,
					width: { xs: '68px', lg: '200px' },
					height: { xs: '125px', lg: '300px' },
				}}></Paper>
			<Paper
				elevation={5}
				sx={{
					bgcolor: theme.palette.primary.main,
					width: { xs: '68px', lg: '200px' },
					height: { xs: '125px', lg: '300px' },
				}}></Paper>
			<Paper
				elevation={5}
				sx={{
					bgcolor: theme.palette.primary.main,
					width: { xs: '68px', lg: '200px' },
					height: { xs: '125px', lg: '300px' },
				}}></Paper>
			<Paper
				elevation={5}
				sx={{
					display: { xs: 'none', lg: 'block' },
					bgcolor: theme.palette.primary.main,
					width: { xs: '68px', lg: '200px' },
					height: { xs: '125px', lg: '300px' },
				}}></Paper>
		</Grid>
	</Box>
);

export default Hero;