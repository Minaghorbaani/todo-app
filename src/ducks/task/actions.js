import { createAction } from 'Helpers';
import taskTypes from './types';

const taskActions = {
	addTask: createAction(taskTypes.ADD),
	updateTask: createAction(taskTypes.UPDATE),
	deleteTask: createAction(taskTypes.DELETE),
};

export default taskActions;
