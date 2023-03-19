import routes from './routes';
import { HomePage, AddTaskPage } from 'Pages';

const routers = [
	{
		id: routes.home,
		path: routes.home,
		element: HomePage,
	},
	{
		id: routes.add_task,
		path: routes.add_task,
		element: AddTaskPage,
	},
];

export default routers;
