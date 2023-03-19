import React from 'react';
import { Routes } from 'react-router-dom';

import { generateRoutes } from 'Helpers';
import routers from './constants/routers';
import routeTypes from './constants/routeTypes';

const Router = () => {
	const pages = routers.map((route, key) => {
		let nestedRoutes;
		if (route.type === routeTypes.layout && !!route.pages.length) {
			nestedRoutes = route.pages.map((route, key) =>
				generateRoutes({ ...route, key })
			);
		}
		return generateRoutes({ ...route, children: nestedRoutes, key });
	});

	return <Routes>{pages}</Routes>;
};

export default Router;
