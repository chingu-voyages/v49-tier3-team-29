/* eslint-disable no-mixed-spaces-and-tabs */
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Paper,
	Button,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ReviewTableComponent = ({ reviews }) => {
	const [showFullText, setShowFullText] = useState(
		Array(reviews.length).fill(false)
	);

	const toggleTextVisibility = index => {
		const newVisibility = [...showFullText];
		newVisibility[index] = !newVisibility[index];
		setShowFullText(newVisibility);
	};

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
							<TableCell>
								{showFullText[index] ? (
									<div>
										{review.text}
										<Button
											onClick={() =>
												toggleTextVisibility(index)
											}>
											Read Less
										</Button>
									</div>
								) : (
									<div>
										{review.text.length > 300
											? `${review.text.substring(
													0,
													300
											  )}...`
											: review.text}
										{review.text.length > 300 && (
											<Button
												onClick={() =>
													toggleTextVisibility(index)
												}>
												Read More
											</Button>
										)}
									</div>
								)}
							</TableCell>
							<TableCell>
								{review.created_at.toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'long',
								})}
							</TableCell>
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
