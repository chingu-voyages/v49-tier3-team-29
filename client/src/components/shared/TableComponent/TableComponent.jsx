import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeListBook } from '../../../reducers/listSlice';

const TableComponent = ({ rowHeaders, data }) => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [selected, setSelected] = useState([]);

	const dispatch = useDispatch();

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleRemove = row => {
		const bookDispatch = async selected => {
			await dispatch(
				removeListBook({ listId: selected.id, bookId: row.id })
			);
		};
		bookDispatch();
		console.log('Remove button clicked for row:', row);
	};
	// console.log('data:', data);

	return (
		<div>
			<div style={{ overflow: 'auto', maxHeight: '70vh' }}>
				<TableContainer component={Paper}>
					<Table
						sx={{
							minWidth: 650,
							'& .MuiTableCell-root': {
								maxWidth: '200px', // Set the maximum width for all TableCell components
								overflow: 'hidden', // Optional: Handle overflow content
								// textOverflow: 'ellipsis', // Optional: Add ellipsis for overflow content
								whiteSpace: 'wrap', // Optional: Prevent text wrapping
							},
						}}
						aria-label='simple table'>
						<TableHead>
							<TableRow>
								{rowHeaders.map(header => (
									<TableCell key={header}>{header}</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{data
								.slice(
									page * rowsPerPage,
									page * rowsPerPage + rowsPerPage
								)
								.map(row => (
									<TableRow
										key={row.title}
										sx={{
											'&:last-child td, &:last-child th':
												{
													border: 0,
												},
										}}>
										<TableCell
											component='img'
											src={row.imageUrl}
											scope='row'
											sx={{
												maxHeight: '170px',
												maxWidth: '110px',
											}}></TableCell>
										<TableCell align='left'>
											{row.title}
										</TableCell>
										<TableCell align='left'>
											{row.author}
										</TableCell>
										<TableCell align='left'>
											<Button
												variant='contained'
												color='primary'
												onClick={() =>
													handleRemove(row)
												}
												sx={{
													width: '10px',
													height: '40px',
												}}>
												<DeleteIcon
													sx={{
														width: '80%',
														height: 'auto',
													}}
												/>{' '}
												{/* Center the icon */}
											</Button>
										</TableCell>
									</TableRow>
								))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component='div'
				count={data.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</div>
	);
};

TableComponent.propTypes = {
	rowHeaders: PropTypes.array.isRequired,
	data: PropTypes.array.isRequired,
};

export default TableComponent;
