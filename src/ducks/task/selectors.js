import { createSelector } from 'reselect';

const selectTask = (state) => state.task;

const selectList = createSelector(selectTask, (task) => task?.list);

const taskSelectors = {
	selectTask,
	selectList,
};

export default taskSelectors;
