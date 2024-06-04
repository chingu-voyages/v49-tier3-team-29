import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import theme from '../../theme';
import Stack from '@mui/material/Stack';
import MaterialLink from '@mui/material/Link';
import { Link } from 'react-router-dom';

const UserActivity = () => {
	return (
		<Stack
			pt={{ xs: 4, sm: 12 }}
			pb={{ xs: 8, sm: 16 }}
			spacing={{ xs: 3, sm: 6 }}
			direction={{ xs: 'column', sm: 'row' }}
			justifyContent={'center'}>
			<Stack
				alignItems={'center'}
				justifyContent={'center'}
				spacing={2}>
				<Typography variant="h6">You Are Reading</Typography>
				<Paper
					elevation={5}
					sx={{
						bgcolor: theme.palette.primary.main,
						width: { xs: '150px', sm: '200px' },
						height: { xs: '220px', sm: '300px' },
					}}></Paper>
				<MaterialLink component={Link}>
					View all currently reading
				</MaterialLink>
			</Stack>
			<Stack
				alignItems={'center'}
				justifyContent={'center'}
				spacing={2}>
				<Typography variant="h6">You Just Finished</Typography>
				<Paper
					elevation={5}
					sx={{
						bgcolor: theme.palette.primary.main,
						width: { xs: '150px', sm: '200px' },
						height: { xs: '220px', sm: '300px' },
					}}></Paper>
				<MaterialLink component={Link}>
					View all read books
				</MaterialLink>
			</Stack>
			<Stack
				alignItems={'center'}
				justifyContent={'center'}
				spacing={2}>
				<Typography variant="h6">You Want To Read</Typography>
				<Paper
					elevation={5}
					sx={{
						bgcolor: theme.palette.primary.main,
						width: { xs: '150px', sm: '200px' },
						height: { xs: '220px', sm: '300px' },
					}}></Paper>
				<MaterialLink component={Link}>
					View books you{"'"}d like to read
				</MaterialLink>
			</Stack>
		</Stack>
	);
};

export default UserActivity;
