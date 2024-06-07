import { CssBaseline } from '@mui/material';
import TableComponent from '../shared/TableComponent/TableComponent';
import styles from './MyBooks.module.css';
import theme from '../../theme';

const rowHeaders = ['Cover', 'Title', 'Author', 'Remove'];

const data = [
	{
		cover: 'https://images.blinkist.io/images/books/595a0a96b238e100069fb34b/1_1/470.jpg',
		title: 'The Inner Game of Tennis',
		author: 'W. Timothy Gallwey',
	},
	{
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386925632i/44936.jpg',
		title: 'Refactoring, Improving the Design of Existing Code',
		author: 'Martin Fowler',
	},
	{
		cover: 'https://images.blinkist.io/images/books/595a0a96b238e100069fb34b/1_1/470.jpg',
		title: 'The Inner Game of Tennis',
		author: 'W. Timothy Gallwey',
	},
	{
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442953450i/420297.jpg',
		title: 'Curious George',
		author: 'H.A. Rey',
	},
	{
		cover: 'https://images.blinkist.io/images/books/595a0a96b238e100069fb34b/1_1/470.jpg',
		title: 'The Inner Game of Tennis',
		author: 'W. Timothy Gallwey',
	},
	{
		cover: 'https://images.blinkist.io/images/books/595a0a96b238e100069fb34b/1_1/470.jpg',
		title: 'The Inner Game of Tennis',
		author: 'W. Timothy Gallwey',
	},
];

const MyBooks = () => (
	<div
		style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'space-between',
			background: theme.palette.secondary.main,
		}}>
		<div data-testid="MyBooks">
			<CssBaseline />

			<h3 className={styles.header}>My Books</h3>
			<TableComponent
				rowHeaders={rowHeaders}
				data={data}
			/>
		</div>
	</div>
);

export default MyBooks;
