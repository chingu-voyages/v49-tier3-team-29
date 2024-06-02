import TableComponent from '../../shared/TableComponent/TableComponent';
import styles from './WantToReadPage.module.css';

const rowHeaders = ['Cover', 'Title', 'Author', 'List', 'Remove'];

const data = [
	{
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442953450i/420297.jpg',
		title: 'Curious George',
		author: 'H.A. Rey',
		list: 'want-to-read',
	},
	{
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442953450i/420297.jpg',
		title: 'Curious George',
		author: 'H.A. Rey',
		list: 'want-to-read',
	},
	{
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442953450i/420297.jpg',
		title: 'Curious George',
		author: 'H.A. Rey',
		list: 'want-to-read',
	},
	{
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442953450i/420297.jpg',
		title: 'Curious George',
		author: 'H.A. Rey',
		list: 'want-to-read',
	},
	{
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442953450i/420297.jpg',
		title: 'Curious George',
		author: 'H.A. Rey',
		list: 'want-to-read',
	},
	{
		cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442953450i/420297.jpg',
		title: 'Curious George',
		author: 'H.A. Rey',
		list: 'want-to-read',
	},
];

const WantToReadPage = () => (
	<div
		className={styles.WantToReadPage}
		data-testid="CurrentlyReadingPage">
		<h3 className={styles.header}>Want-To-Read</h3>
		<TableComponent
			rowHeaders={rowHeaders}
			data={data}
		/>
	</div>
);

export default WantToReadPage;
