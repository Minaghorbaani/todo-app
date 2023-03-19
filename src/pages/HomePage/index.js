import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { status } from 'Constants';
import { taskSelectors } from 'Ducks';
import Home from 'Components/Pages/Home/loadable';

const HomePage = (props) => {
	const { tasks } = props;

	const [todos, setTodos] = useState([]);
	const [dones, setDones] = useState([]);

	useEffect(() => {
		const todos = tasks.filter((item) => item.status === status.todo);
		const dones = tasks.filter((item) => item.status === status.done);
		setTodos(todos);
		setDones(dones);
	}, [tasks]);

	return (
		<Home
			doneList={dones}
			todoList={todos}
		/>
	);
};

HomePage.propTypes = {
	tasks: PropTypes.array,
};

const mapStateToProps = (state) => {
	return {
		tasks: taskSelectors.selectList(state),
	};
};

export default connect(mapStateToProps)(HomePage);
