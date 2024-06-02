import styles from './CompletedPage.module.css';
import TableComponent from '../../shared/TableComponent/TableComponent';

const rowHeaders = ['Cover', 'Title', 'Author', 'List', 'Remove'];

const data = [
	{
		cover: 'https://images.blinkist.io/images/books/595a0a96b238e100069fb34b/1_1/470.jpg',
		title: 'The Inner Game of Tennis',
		author: 'W. Timothy Gallwey',
		list: 'completed', // I don't think "list" is on the book model, but we as long as we have access to it somewhere, we can use it
	},
	{
		cover: 'https://images.blinkist.io/images/books/595a0a96b238e100069fb34b/1_1/470.jpg',
		title: 'The Inner Game of Tennis',
		author: 'W. Timothy Gallwey',
		list: 'completed',
	},
	{
		cover: 'https://images.blinkist.io/images/books/595a0a96b238e100069fb34b/1_1/470.jpg',
		title: 'The Inner Game of Tennis',
		author: 'W. Timothy Gallwey',
		list: 'completed',
	},
	{
		cover: 'https://images.blinkist.io/images/books/595a0a96b238e100069fb34b/1_1/470.jpg',
		title: 'The Inner Game of Tennis',
		author: 'W. Timothy Gallwey',
		list: 'completed',
	},
	{
		cover: 'https://images.blinkist.io/images/books/595a0a96b238e100069fb34b/1_1/470.jpg',
		title: 'The Inner Game of Tennis',
		author: 'W. Timothy Gallwey',
		list: 'completed',
	},
	{
		cover: 'https://images.blinkist.io/images/books/595a0a96b238e100069fb34b/1_1/470.jpg',
		title: 'The Inner Game of Tennis',
		author: 'W. Timothy Gallwey',
		list: 'completed',
	},
];

const CompletedPage = () => (
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
			className={styles.CompletedPage}
			data-testid="CompletedPage">
			<h3 className={styles.header}>Completed Books</h3>
			<TableComponent
				rowHeaders={rowHeaders}
				data={data}
			/>
		</div>
	</div>
);

export default CompletedPage;
