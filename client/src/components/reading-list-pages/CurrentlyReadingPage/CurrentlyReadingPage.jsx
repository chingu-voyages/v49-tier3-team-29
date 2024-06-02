import TableComponent from '../../shared/TableComponent/TableComponent';
import styles from './CurrentlyReadingPage.module.css';

const rowHeaders = ['Cover', 'Title', 'Author', 'List', 'Remove'];

const data = [
	{
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386925632i/44936.jpg',
		title: 'Refactoring, Improving the Design of Existing Code',
		author: 'Martin Fowler',
		list: 'currently-reading',
	},
	{
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386925632i/44936.jpg',
		title: 'Refactoring, Improving the Design of Existing Code',
		author: 'Martin Fowler',
		list: 'currently-reading',
	},
	{
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386925632i/44936.jpg',
		title: 'Refactoring, Improving the Design of Existing Code',
		author: 'Martin Fowler',
		list: 'currently-reading',
	},
	{
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386925632i/44936.jpg',
		title: 'Refactoring, Improving the Design of Existing Code',
		author: 'Martin Fowler',
		list: 'currently-reading',
	},
	{
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386925632i/44936.jpg',
		title: 'Refactoring, Improving the Design of Existing Code',
		author: 'Martin Fowler',
		list: 'currently-reading',
	},
	{
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386925632i/44936.jpg',
		title: 'Refactoring, Improving the Design of Existing Code',
		author: 'Martin Fowler',
		list: 'currently-reading',
	},
];

const CurrentlyReadingPage = () => (
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
			className={styles.CurrentlyReadingPage}
			data-testid="CurrentlyReadingPage">
			<h3 className={styles.header}>Currently Reading</h3>
			<TableComponent
				rowHeaders={rowHeaders}
				data={data}
			/>
		</div>
	</div>
);

export default CurrentlyReadingPage;
