import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import ViewQuiltRounded from '@mui/icons-material/ViewQuiltRounded';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { useState } from 'react';

const Features = () => {
	const [selectedItemIndex, setSelectedItemIndex] = useState(0);

	const handleItemClick = index => {
		setSelectedItemIndex(index);
	};

	const items = [
		{
			icon: <ViewQuiltRounded />,
			title: 'Book Reviews',
			description:
				'This item could provide a snapshot of the most important metrics or data points related to the product.',
			imageLight:
				'url("/static/images/templates/templates-images/dash-light.png")',
		},
		{
			icon: <EdgesensorHighRoundedIcon />,
			title: 'Personalized Lists',
			description:
				'This item could provide information about the mobile app version of the product.',
			imageLight:
				'url("/static/images/templates/templates-images/mobile-light.png")',
		},
		{
			icon: <DevicesRoundedIcon />,
			title: 'Discovery',
			description:
				'This item could let users know the product is available on all platforms, such as web, mobile, and desktop.',
			imageLight:
				'url("/static/images/templates/templates-images/devices-light.png")',
		},
	];
	return (
		<Box mt={6}>
			<Grid
				container
				spacing={3}>
				<Grid item>
					<Typography
						variant="h5"
						textAlign={'center'}
						fontWeight={500}>
						Shelfshare features
					</Typography>
					<Typography variant="body1">
						Here you can provide a brief overview of the key
						features of the product. For example, you could list the
						number of features, the types of features, add-ons, or
						the benefits of the features.
					</Typography>
				</Grid>
				<Grid
					container
					item
					gap={1}
					sx={{ display: { xs: 'auto', sm: 'none' } }}>
					{items.map(({ title }, index) => (
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
								{items[selectedItemIndex].title}
							</Typography>
							<Typography variant="body2">
								{items[selectedItemIndex].description}
							</Typography>
						</Box>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Features;
