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
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';

const TableComponent = ({ rowHeaders, data }) => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleRemove = row => {
		console.log('Remove button clicked for row:', row);
	};

	const handleListChange = (e, row) => {
		console.log('List change for row:', row, 'New value:', e.target.value);
	};

	return (
		<div>
			<div style={{ overflow: 'auto', maxHeight: '400px' }}>
				<TableContainer component={Paper}>
					<Table
						sx={{ minWidth: 650 }}
						aria-label="simple table">
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
											component="img"
											src={row.cover}
											scope="row"
											sx={{
												maxHeight: '100px',
												maxWidth: '100px',
											}}></TableCell>
										<TableCell align="right">
											{row.title}
										</TableCell>
										<TableCell align="right">
											{row.author}
										</TableCell>
										<TableCell>
											<Select
												value={row.list}
												onChange={e =>
													handleListChange(e, row)
												}
												defaultValue={row.list}
												sx={{ width: '150px' }}>
												<MenuItem value="completed">
													Completed
												</MenuItem>
												<MenuItem value="want-to-read">
													Want to Read
												</MenuItem>
												<MenuItem value="currently-reading">
													Currently Reading
												</MenuItem>
											</Select>
										</TableCell>
										<TableCell align="right">
											<Button
												variant="contained"
												color="primary"
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
				component="div"
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
