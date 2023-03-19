import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';

import storeContainer from 'Config/redux/store';
import PageProvider from 'Components/HOC/PageProvider';

import 'Statics/styles/app.scss';

const { store, persistor } = storeContainer;

const App = () => (
	<Provider store={store}>
		<PersistGate
			loading={null}
			persistor={persistor}
		>
			<Router>
				<PageProvider />
			</Router>
		</PersistGate>
	</Provider>
);
export default App;
