import ReactDOM from 'react-dom'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer';
import App from './components/app'

ReactDOM.render(
    <Provider store={createStore(reducer)}><App /></Provider>,
    document.getElementById('root')
);
