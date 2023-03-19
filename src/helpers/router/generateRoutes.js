import React from 'react';
import { Route } from 'react-router-dom';

export const generateRoutes = (route) => {
	const { path, id, element: Element, children } = route;
	const componentProps = route.props || {};

	return (
		<Route
			key={`${id.replace(/\//g, '_')}`}
			path={path}
			element={
				<Element
					{...componentProps}
					{...route}
				/>
			}
		>
			{children}
		</Route>
	);
};
