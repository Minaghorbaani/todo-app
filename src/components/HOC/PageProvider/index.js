import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import Router from 'Pages/router';
import Loading from 'Components/Globals/Elements/Loading';

const PageProvider = (props) => {
	const { className } = props;

	return (
		<div className={className}>
			<Suspense fallback={<Loading />}>
				<Router />
			</Suspense>
		</div>
	);
};

PageProvider.defaultProps = {
	className: '',
};

PageProvider.propTypes = {
	className: PropTypes.string,
};

export default PageProvider;
