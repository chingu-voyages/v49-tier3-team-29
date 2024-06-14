import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import theme from '../../theme';
import { useDispatch } from 'react-redux';

const ReviewModal = () => {
	const [open, setOpen] = React.useState(false);
	const [rating, setRating] = React.useState(0);
	const [title, setTitle] = React.useState('');
	const [body, setBody] = React.useState('');

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const dispatch = useDispatch();

	const handleSubmission = () => {
		const reviewData = {
			rating,
			title,
			body,
		};

		handleClose();
	};

	return (
		<Box>
			<Button
				onClick={handleOpen}
				variant='contained'>
				Review Book
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Card
					sx={{
						width: { xs: '90%', md: '50%' },
						overflow: 'auto',
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%,-50%)',
					}}>
					<CardContent
						sx={{
							display: 'flex',
							gap: '12px',
							flexDirection: 'column',
						}}>
						<Box
							display={'flex'}
							flexDirection={'row'}
							gap='12px'>
							<Paper
								elevation={5}
								sx={{
									bgcolor: theme.palette.primary.main,
									width: { xs: '50px' },
									height: { xs: '100px' },
								}}></Paper>
							<Stack textAlign={'left'}>
								<Typography variant='h4'>Book Title</Typography>
								<Typography
									variant='h8'
									color={'text.secondary'}>
									by Book Author
								</Typography>
							</Stack>
						</Box>
						<Typography
							component='legend'
							alignSelf={'center'}>
							Your rating:
						</Typography>
						<Rating
							sx={{ alignSelf: 'center' }}
							name='simple-controlled'
							value={rating}
							defaultValue={0}
							size='large'
							onChange={event => {
								setRating(event.target.value);
							}}
						/>
						<TextField
							placeholder='Write a title for the review'
							value={title}
							onChange={event => {
								setTitle(event.target.value);
							}}></TextField>
						<TextField
							id='outlined-multiline-static'
							multiline
							rows={8}
							value={body}
							onChange={event => {
								setBody(event.target.value);
							}}
							placeholder='Write a review'></TextField>
						<Button
							variant='contained'
							size='small'
							onClick={handleSubmission}
							sx={{ width: '20%', alignSelf: 'center' }}>
							Post
						</Button>
					</CardContent>
				</Card>
			</Modal>
		</Box>
	);
};

export default ReviewModal;
