import { CssBaseline } from '@mui/material';
import TableComponent from '../shared/TableComponent/TableComponent';
import styles from './MyBooks.module.css';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchList } from '../../reducers/listSlice';

const rowHeaders = ['Cover', 'Title', 'Author', 'Remove'];

const MyBooks = () => {
	const user = useSelector(state => state.session.user);
	const [userList, setUserList] = useState([]);
	const dispatch = useDispatch();

	if (!user.username) {
		window.location.href = '/';
	}
	useEffect(() => {
		const fetchUserList = async () => {
			const response = await dispatch(fetchList(user.username));
			setUserList(response.payload.books);
		};
		fetchUserList();
	}, [dispatch, user.username]);

	return (
		<div
			style={{
				padding: 20,
			}}>
			<CssBaseline />
			<h3 className={styles.header}>My Books</h3>
			<TableComponent
				rowHeaders={rowHeaders}
				data={userList}
			/>
		</div>
	);
};

export default MyBooks;
