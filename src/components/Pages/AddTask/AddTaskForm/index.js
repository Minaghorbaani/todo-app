import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Form, Button } from 'react-bootstrap';

import { groups } from 'Constants';
import { taskActions } from 'Ducks';

import styles from './styles.module.scss';

const AddTaskForm = (props) => {
	const { addTask, onSubmitCallback } = props;

	const [title, setTitle] = useState();
	const [group, setGroup] = useState();

	const submit = (e) => {
		e.preventDefault();
		addTask({ title, group });
		onSubmitCallback();
	};

	return (
		<Form onSubmit={submit}>
			<Form.Group className='mb-3'>
				<Form.Label>Title</Form.Label>
				<Form.Control
					type='text'
					required
					onChange={(e) => setTitle(e?.target?.value)}
				/>
			</Form.Group>
			<Form.Group className='mb-5'>
				<Form.Label>Group</Form.Label>
				<Form.Select
					onChange={(e) => setGroup(e?.target?.value)}
					required
				>
					<option value=''>select the group..</option>
					{groups.map((group, index) => (
						<option
							key={index}
							value={group}
						>
							{group}
						</option>
					))}
				</Form.Select>
			</Form.Group>

			<Button
				type='submit'
				size='lg'
				className={clsx('btn btn-primary', styles.button)}
			>
				Add
			</Button>
		</Form>
	);
};

AddTaskForm.defaultProps = {
	onSubmitCallback: () => {},
};

AddTaskForm.propTypes = {
	addTask: PropTypes.func,
	onSubmitCallback: PropTypes.func,
};

const mapDispatchToProps = {
	addTask: taskActions.addTask,
};

export default connect(null, mapDispatchToProps)(AddTaskForm);
