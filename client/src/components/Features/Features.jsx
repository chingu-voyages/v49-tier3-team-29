import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { useState } from 'react';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { Link } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ViewListIcon from '@mui/icons-material/ViewList';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
const Features = () => {
	const [selectedItemIndex, setSelectedItemIndex] = useState(0);

	const handleItemClick = index => {
		setSelectedItemIndex(index);
	};

	const features = [
		{
			icon: <RateReviewIcon />,
			title: 'Book Reviews',
			description:
				'Share your thoughts and help others find their next great read with our in-depth book review feature.',
			imageLight:
				'url("/static/images/templates/templates-images/dash-light.png")',
		},
		{
			icon: <ViewListIcon />,
			title: 'Personalized Lists',
			description:
				"Keep your reading life organized - create custom lists to track what you've read, what you're reading, and what you want to read next.",
			imageLight:
				'url("/static/images/templates/templates-images/mobile-light.png")',
		},
		{
			icon: <LibraryBooksIcon />,
			title: 'Discovery',
			description:
				'Uncover your next great read by exploring books others have loved and reviewed.',
			imageLight:
				'url("/static/images/templates/templates-images/devices-light.png")',
		},
	];
	return (
		<Box mt={6}>
			<Grid
				container
				spacing={4}>
				<Grid
					item
					container
					spacing={4}
					xs={12}
					md={6}>
					<Grid
						item
						textAlign={{ xs: 'center', sm: 'left' }}>
						<Typography
							variant="h5"
							fontWeight={500}>
							Shelfshare features
						</Typography>
						<Typography variant="body1">
							Shelfshare is a social network for book lovers where
							you can track your reading progress, discover new
							books through recommendations and reviews, and
							connect with other readers who share your interests.
						</Typography>
					</Grid>
					<Grid
						container
						item
						gap={1}
						sx={{ display: { xs: 'auto', sm: 'none' } }}>
						{features.map(({ title }, index) => (
							<Chip
								key={index}
								label={title}
								onClick={() => handleItemClick(index)}></Chip>
						))}
					</Grid>
					<Grid item>
						<Card
							variant="outlined"
							sx={{ display: { sm: 'none' }, p: 2 }}>
							<Box>Image</Box>
							<Box textAlign={'left'}>
								<Typography
									variant="body2"
									fontWeight={'bold'}>
									{features[selectedItemIndex].title}
								</Typography>
								<Typography variant="body2">
									{features[selectedItemIndex].description}
								</Typography>
							</Box>
						</Card>
					</Grid>
					<Grid item>
						<Stack
							direction="column"
							justifyContent="center"
							spacing={2}
							useFlexGap
							sx={{
								width: '100%',
								display: { xs: 'none', sm: 'flex' },
							}}
							alignItems="flex-start">
							{features.map(
								({ icon, title, description }, index) => (
									<Card
										key={index}
										variant="outlined"
										component={Button}
										onClick={() => handleItemClick(index)}
										sx={{
											p: 3,
											height: 'fit-content',
											width: '100%',
											background: 'none',
											backgroundColor:
												selectedItemIndex === index
													? 'action.selected'
													: undefined,
											borderColor:
												selectedItemIndex === index
													? 'primary.light'
													: 'grey.300',
										}}>
										<Box
											sx={{
												width: '100%',
												display: 'flex',
												textAlign: 'left',
												flexDirection: {
													xs: 'column',
													md: 'row',
												},
												alignItems: { md: 'center' },
												gap: 2.5,
											}}>
											<Box
												sx={{
													color:
														selectedItemIndex ===
														index
															? 'primary.main'
															: 'grey.300',
												}}>
												{icon}
											</Box>
											<Box sx={{ textTransform: 'none' }}>
												<Typography
													variant="body2"
													fontWeight="bold"
													color={'text.primary'}>
													{title}
												</Typography>
												<Typography
													color={'text.secondary'}
													variant="body2"
													sx={{ my: 0.5 }}>
													{description}
												</Typography>
												<Link
													color={'primary'}
													variant="body2"
													fontWeight={'bold'}
													sx={{
														display: 'inline-flex',
														alignfeatures: 'center',
													}}
													onClick={event =>
														event.stopPropagation()
													}>
													<span>Learn More</span>
													<ChevronRightRoundedIcon
														fontSize="small"
														sx={{
															mt: '1px',
															ml: '2px',
														}}></ChevronRightRoundedIcon>
												</Link>
											</Box>
										</Box>
									</Card>
								)
							)}
						</Stack>
					</Grid>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					sx={{
						display: { xs: 'none', sm: 'flex', width: '100%' },
					}}>
					<Card
						variant="outlined"
						sx={{
							height: '100%',
							width: '100%',
							display: { xs: 'none', sm: 'flex' },
							pointerEvents: 'none',
						}}>
						<Box
							sx={{
								m: 'auto',
								width: 420,
								height: 500,
								backgroundSize: 'contain',
								backgroundImage: 'none', // needs to be changed to screenshot of features!
							}}></Box>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Features;
