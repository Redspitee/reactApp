import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {reducerName} from './index.redux';
import './index.css';
import App from './App';
const store = createStore(reducerName,compose(
    applyMiddleware(thunk)
    // ,
    // window.devToolsExtension ? window.devToolsExtension():f=>f
))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById('root'));
