import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Paper,
} from '@mui/material';
import PropTypes from 'prop-types';

const ReviewTableComponent = ({ reviews }) => {
	return (
		<TableContainer
			component={Paper}
			sx={{ maxHeight: 800, overflowY: 'auto' }}>
			<Table>
				<thead
					style={{
						position: 'sticky',
						top: 0,
						zIndex: 1,
						backgroundColor: '#fff',
					}}>
					<TableRow>
						<TableCell style={{ fontWeight: 'bold' }}>
							Cover & Title
						</TableCell>
						<TableCell style={{ fontWeight: 'bold' }}>
							Rating
						</TableCell>
						<TableCell style={{ fontWeight: 'bold' }}>
							Review Text
						</TableCell>
						<TableCell style={{ fontWeight: 'bold' }}>
							Date
						</TableCell>
					</TableRow>
				</thead>
				<TableBody>
					{reviews.map((review, index) => (
						<TableRow key={index}>
							<TableCell>
								<div>
									<img
										src={review.cover}
										alt="Cover"
										style={{ width: 50, height: 50 }}
									/>
								</div>
								<div>{review.title}</div>
							</TableCell>
							<TableCell>{review.rating}</TableCell>
							<TableCell>{review.text}</TableCell>
							<TableCell>{review.created_at}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

ReviewTableComponent.propTypes = {
	reviews: PropTypes.array.isRequired,
};

export default ReviewTableComponent;
