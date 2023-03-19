import React from 'react';
import PropTypes from 'prop-types';
import { Card, Badge } from 'react-bootstrap';

import DeleteTaskButton from '../DeleteTaskButton';
import EditTaskButton from '../EditTaskButton';
import { status as defaultStatus } from 'Constants';

const TaskCard = (props) => {
	const { className, task } = props;
	const { title, created_at, status, group } = task;

	return (
		<Card className={className}>
			<Card.Body>
				<Card.Title className='d-flex justify-content-between'>
					{title}
					<Badge bg='info'>{group}</Badge>
				</Card.Title>
				<Card.Text>{created_at.toLocaleString()}</Card.Text>
				<Badge bg='success'>{status}</Badge>
				<div className='d-flex flex-row justify-content-between mt-3'>
					<EditTaskButton task={task} />
					{task.status !== defaultStatus.done && (
						<DeleteTaskButton task={task} />
					)}
				</div>
			</Card.Body>
		</Card>
	);
};

TaskCard.propTypes = {
	className: PropTypes.string,
	task: PropTypes.object.isRequired,
};

export default TaskCard;
