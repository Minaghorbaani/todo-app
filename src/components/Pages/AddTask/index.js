import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import routes from 'Routes';
import AddTaskForm from './AddTaskForm';

import styles from './styles.module.scss';

const AddTask = () => {
	const navigate = useNavigate();

	return (
		<div>
			<header className={styles.header}>
				<h3 className='text-center'>Add Task</h3>
				<Button
					onClick={() => navigate(routes.home)}
					className={styles.back_button}
					variant='link'
				>
					<i className='bi-chevron-left' />
				</Button>
			</header>
			<div className={styles.form}>
				<AddTaskForm onSubmitCallback={() => navigate(routes.home)} />
			</div>
		</div>
	);
};

export default AddTask;
