import styles from './SearchPage.module.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
	const navigate = useNavigate();

	const searchQuery = useSelector(state => state.book.searchResults) || [];

	if (searchQuery === null || searchQuery.length === 0) {
		navigate('/');
	}

	return (
		<div className={styles.container}>
			{searchQuery?.map(book => (
				<div key={book.id}>
					<img
						src={book.imageUrl}
						className={styles.cover}
						alt='book cover'
					/>
					<h3>{book.title}</h3>
					<p>{book.author}</p>
					<button>Add to My Books</button>
				</div>
			))}
		</div>
	);
};

export default SearchPage;
