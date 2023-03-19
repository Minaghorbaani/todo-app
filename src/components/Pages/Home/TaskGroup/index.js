import React from 'react';
import PropTypes from 'prop-types';
import Accordion from 'react-bootstrap/Accordion';
import TaskCard from '../TaskCard';

const TaskGroup = (props) => {
	const { title, list } = props;

	return (
		<Accordion>
			<Accordion.Item>
				<Accordion.Header>{title}</Accordion.Header>
				<Accordion.Body>
					{list.map((task, index) => (
						<TaskCard
							key={index}
							className='mb-2'
							task={task}
						/>
					))}
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
};

TaskGroup.propTypes = {
	title: PropTypes.string,
	list: PropTypes.array,
};

export default TaskGroup;
