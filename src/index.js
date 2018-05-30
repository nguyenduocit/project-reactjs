import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import store
import {createStore} from 'redux';
// import reducers 
import myReducer from './reducers/index';

import {Provider} from 'react-redux';
// khởi tạo store
const store = createStore(myReducer);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
