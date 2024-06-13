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
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PropTypes from 'prop-types';

const TableComponent = ({ rowHeaders, data }) => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [orderBy, setOrderBy] = useState('');
	const [order, setOrder] = useState('asc');

	const handleRequestSort = property => {
		const isAsc = orderBy === property && order === 'asc';
		setOrderBy(property);
		setOrder(isAsc ? 'desc' : 'asc');
	};

	const sortedData = data.slice().sort((a, b) => {
		const valueA = a[orderBy] || '';
		const valueB = b[orderBy] || '';
		if (order === 'asc') {
			return valueA.localeCompare(valueB);
		} else {
			return valueB.localeCompare(valueA);
		}
	});

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

	return (
		<div>
			<TableContainer component={Paper}>
				<Table
					sx={{
						maxHeight: 'auto',
						minWidth: 650,
						'& .MuiTableCell-root': {
							maxWidth: '200px',
							overflow: 'hidden',
							whiteSpace: 'wrap',
						},
					}}
					aria-label="simple table">
					<TableHead>
						<TableRow
							style={{
								position: 'sticky',
								top: 0,
								zIndex: 1,
							}}>
							{rowHeaders.map(header => (
								<TableCell key={header}>
									<Button
										onClick={() =>
											handleRequestSort(header)
										}
										startIcon={
											orderBy === header ? (
												order === 'asc' ? (
													<ArrowUpwardIcon />
												) : (
													<ArrowDownwardIcon />
												)
											) : null
										}>
										{header}
									</Button>
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{sortedData
							.slice(
								page * rowsPerPage,
								page * rowsPerPage + rowsPerPage
							)
							.map(row => (
								<TableRow
									key={row.title}
									sx={{
										'&:last-child td, &:last-child th': {
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
										}}
									/>
									<TableCell align="left">
										{row.title}
									</TableCell>
									<TableCell align="left">
										{row.author}
									</TableCell>
									<TableCell align="left">
										<Button
											variant="contained"
											color="primary"
											onClick={() => handleRemove(row)}
											sx={{
												width: '10px',
												height: '40px',
											}}>
											<DeleteIcon
												sx={{
													width: '80%',
													height: 'auto',
												}}
											/>
										</Button>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
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
