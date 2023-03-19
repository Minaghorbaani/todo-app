import React from 'react';

import './styles.scss';

const Loading = () => {
	return (
		<div className='dots-loading__container'>
			<div className='dots-loading'>
				<span className='dots-loading__dot' />
				<span className='dots-loading__dot' />
				<span className='dots-loading__dot' />
			</div>
		</div>
	);
};

export default Loading;
