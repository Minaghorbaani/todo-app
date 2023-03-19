import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { Button, Modal } from 'react-bootstrap';

import { taskActions } from 'Ducks';

import styles from './styles.module.scss';

const DeleteTaskButton = (props) => {
	const { task, deleteTask } = props;
	const { id, title } = task;

	const [show, setShow] = useState(false);

	const onClose = () => setShow(false);
	const onShow = () => setShow(true);
	const onDelete = () => {
		deleteTask({ id });
		onClose();
	};

	return (
		<>
			<Button
				variant='outline-danger'
				className='align-self-end text-lg-center'
				onClick={onShow}
			>
				<i className={clsx('bi-trash', styles.icon)} />
			</Button>

			<Modal
				show={show}
				onHide={onClose}
			>
				<Modal.Header closeButton>
					<Modal.Title>Delete Task</Modal.Title>
				</Modal.Header>
				<Modal.Body className='text-center'>{`Sure you want to delete '${title}' task?`}</Modal.Body>
				<Modal.Footer>
					<Button
						variant='secondary'
						onClick={onClose}
					>
						No
					</Button>
					<Button
						variant='primary'
						onClick={onDelete}
					>
						Yes, delete
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

DeleteTaskButton.propTypes = {
	task: PropTypes.object,
	deleteTask: PropTypes.func,
};

const mapDispatchToProps = {
	deleteTask: taskActions.deleteTask,
};
export default connect(null, mapDispatchToProps)(DeleteTaskButton);
