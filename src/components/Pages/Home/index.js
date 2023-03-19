import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import routes from 'Routes';
import TaskColumn from './TaskColumn';

import styles from './styles.module.scss';

const Home = (props) => {
	const { todoList, doneList } = props;

	return (
		<div>
			<header className='p-4 d-flex justify-content-between'>
				<h1>Home</h1>
				<Link
					className={styles.add}
					to={routes.add_task}
				>
					<i className='bi-plus-circle-fill' />
					Add New Task
				</Link>
			</header>
			<div className='d-flex'>
				<div className={styles.column}>
					<TaskColumn
						title='Todo'
						list={todoList}
					/>
				</div>
				<div className={styles.column}>
					<TaskColumn
						title='Done'
						list={doneList}
					/>
				</div>
			</div>
		</div>
	);
};

Home.propTypes = {
	todoList: PropTypes.array,
	doneList: PropTypes.array,
};

export default Home;
