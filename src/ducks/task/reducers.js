import taskTypes from './types';
import { status } from 'Constants';

export const initialStates = {
	list: [],
};

const taskReducers = (state = initialStates, action) => {
	switch (action.type) {
		case taskTypes.ADD: {
			const newTask = {
				...action?.payload,
				created_at: new Date(),
				status: status.todo,
				id: state.list.length,
			};
			const newList = [...state.list, ...[newTask]];
			return { ...state, ...{ list: newList } };
		}
		case taskTypes.UPDATE: {
			const { id, params } = action.payload;
			const taskIndex = state.list.findIndex((item) => item.id === id);
			const newList = [...state.list];
			newList[taskIndex] = { ...newList[taskIndex], ...params };
			return { ...state, ...{ list: newList } };
		}

		case taskTypes.DELETE: {
			const { id } = action.payload;
			const newList = state.list.filter((item) => item.id !== id);
			return { ...state, ...{ list: newList } };
		}

		default:
			return state;
	}
};

export default taskReducers;
