import React from 'react';
import { render } from 'react-dom';
import { TestingApp } from './testingApp';

import 'codemirror/lib/codemirror.css';
import '../css/ubuntu.css';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './rootReducer'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <TestingApp />
  </Provider>,
  document.getElementById('root')
);
