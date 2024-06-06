import TableComponent from '../shared/TableComponent/TableComponent';
import styles from './MyBooks.module.css';

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
			position: 'fixed',
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			background: 'linear-gradient(to bottom, #FFEFD5, #f0f0f0)',
		}}>
		<div
			data-testid="MyBooks"
			style={{ overflow: 'auto' }}>
			<h3 className={styles.header}>My Books</h3>
			<TableComponent
				rowHeaders={rowHeaders}
				data={data}
			/>
		</div>
	</div>
);

export default MyBooks;
