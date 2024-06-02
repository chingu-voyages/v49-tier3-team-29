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
			className={styles.WantToReadPage}
			data-testid="CurrentlyReadingPage">
			<h3 className={styles.header}>Want-To-Read</h3>
			<TableComponent
				rowHeaders={rowHeaders}
				data={data}
			/>
		</div>
	</div>
);

export default WantToReadPage;
