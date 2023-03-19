import { combineReducers } from 'redux';
import { taskReducers } from 'Ducks';

const rootReducers = combineReducers({
	task: taskReducers,
});

export default rootReducers;
