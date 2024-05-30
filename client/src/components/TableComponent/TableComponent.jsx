import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';

// function createData(name, calories, fat, carbs, protein) {
// 	return { name, calories, fat, carbs, protein };
// }

// const rows = [
// 	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// 	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// 	createData('Eclair', 262, 16.0, 24, 6.0),
// 	createData('Cupcake', 305, 3.7, 67, 4.3),
// 	createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const TableComponent = ({ rowHeaders, data }) => {
	return (
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
					{data.map(row => (
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
								className="cover-image"></TableCell>
							<TableCell align="right">{row.title}</TableCell>
							<TableCell align="right">{row.author}</TableCell>
							<TableCell align="right">{row.list}</TableCell>
							<TableCell align="right">
								{row.remove}
							</TableCell>{' '}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

TableComponent.propTypes = {
	rowHeaders: PropTypes.array.isRequired,
	data: PropTypes.array.isRequired,
};

export default TableComponent;
