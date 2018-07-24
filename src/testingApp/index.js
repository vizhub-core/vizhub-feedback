import React from 'react';
import { render } from 'react-dom';
import { TestingApp } from './testingApp';
import { files } from './files';
import { actionCreators } from '../exports';

import 'codemirror/lib/codemirror.css';
import '../dist-symlink/styles.css';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './rootReducer'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <TestingApp />
  </Provider>,
  document.getElementById('root')
);

const { initFiles } = actionCreators;

store.dispatch(initFiles(files));
