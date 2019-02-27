import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {reducerName} from './reducer/reducers';

import Dashbord from './pages/Dashbord';
import Login from './pages/Login';
import './index.css';

const store = createStore(reducerName,compose(
	applyMiddleware(thunk),
	window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__():f=>f
))

ReactDOM.render(
<Provider store={store}>
	<BrowserRouter>
		<Switch>
			<Route path='/login'  component={Login}></Route>
			<Route path='/dashbord' component={Dashbord}></Route>
			<Redirect to="/dashbord"></Redirect>
		</Switch>   
	</BrowserRouter>
</Provider>,
 document.getElementById('root'));
