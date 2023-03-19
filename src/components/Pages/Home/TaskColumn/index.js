import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import TaskGroup from '../TaskGroup';
import { groups as defaultGroups } from 'Constants';

const TaskColumn = (props) => {
	const { title, list } = props;

	const [groups, setGroups] = useState([]);

	useEffect(() => {
		const groupsTemp = defaultGroups.map((item) => {
			const groupList = list?.filter((task) => task.group === item);
			return { title: item, list: groupList };
		});
		setGroups(groupsTemp);
	}, [list]);

	return (
		<div className='border p-4'>
			{title && <h1 className='text-md-center'>{title}</h1>}
			{groups.map((group, index) => {
				return (
					!!group?.list?.length && (
						<div
							className='mb-4'
							key={index}
						>
							<TaskGroup
								title={group.title}
								list={group.list}
							/>
						</div>
					)
				);
			})}
		</div>
	);
};

TaskColumn.propTypes = {
	title: PropTypes.string,
	list: PropTypes.array,
};

export default TaskColumn;
