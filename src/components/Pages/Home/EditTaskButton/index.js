import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { Button, Modal, Form } from 'react-bootstrap';

import { groups } from 'Constants';
import { taskActions } from 'Ducks';
import { status as defaultStatus } from 'Constants';

import styles from './styles.module.scss';

const EditTaskButton = (props) => {
	const { updateTask, task } = props;
	const { id } = task;
	const [show, setShow] = useState(false);
	const [title, setTitle] = useState(task.title);
	const [group, setGroup] = useState(task.group);
	const [status, setStatus] = useState(task.status);

	const onClose = () => setShow(false);
	const onShow = () => setShow(true);
	const onSubmit = (e) => {
		e.preventDefault();
		updateTask({ id, params: { title, group, status } });
		onClose();
	};

	return (
		<>
			<Button
				variant='outline-secondary'
				className='align-self-end text-lg-center'
				onClick={onShow}
			>
				<i className={clsx('bi-pencil', styles.icon)} />
			</Button>

			<Modal
				show={show}
				onHide={onClose}
			>
				<Modal.Header closeButton>
					<Modal.Title>{`Update ${task.title} Task`}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={onSubmit}>
						<Form.Group className='mb-3'>
							<Form.Label>Title</Form.Label>
							<Form.Control
								type='text'
								value={title}
								required
								onChange={(e) => setTitle(e?.target?.value)}
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>Group</Form.Label>
							<Form.Select
								onChange={(e) => setGroup(e?.target?.value)}
								required
								value={group}
							>
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
						<Form.Group className='mb-5'>
							<Form.Label>Status</Form.Label>
							<Form.Select
								onChange={(e) => setStatus(e?.target?.value)}
								required
								value={status}
							>
								{Object.keys(defaultStatus).map((s, index) => (
									<option
										key={index}
										value={s}
									>
										{s}
									</option>
								))}
							</Form.Select>
						</Form.Group>
						<Button
							type='submit'
							size='lg'
							className={clsx('btn btn-primary', styles.button)}
						>
							Update
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
};

EditTaskButton.propTypes = {
	task: PropTypes.object,
	updateTask: PropTypes.func,
};

const mapDispatchToProps = {
	updateTask: taskActions.updateTask,
};
export default connect(null, mapDispatchToProps)(EditTaskButton);
