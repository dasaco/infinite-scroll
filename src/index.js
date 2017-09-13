import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css';

import Router from './router';
import store from './store';

ReactDOM.render(

	<Provider store={store}>
		{Router}
	</Provider>,

	document.getElementById('app-mount-point')
);
