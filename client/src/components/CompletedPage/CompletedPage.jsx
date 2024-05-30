import styles from './CompletedPage.module.css';
import TableComponent from '../TableComponent/TableComponent';

const rowHeaders = ['cover', 'title', 'author', 'list', 'remove'];

const data = [
	{
		cover: 'https://images.blinkist.io/images/books/595a0a96b238e100069fb34b/1_1/470.jpg',
		title: 'The Inner Game of Tennis',
		author: 'W. Timothy Gallwey',
		list: 'Completed',
	},
];

const CompletedPage = () => (
	<div
		className={styles.CompletedPage}
		data-testid="CompletedPage">
		<h1>CompletedPage component</h1>
		<TableComponent
			rowHeaders={rowHeaders}
			data={data}
		/>
	</div>
);

export default CompletedPage;
