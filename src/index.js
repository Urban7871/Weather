import React from 'react'
import reactDom from 'react-dom'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.querySelector("#root"));