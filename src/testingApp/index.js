import React from 'react';
import { render } from 'react-dom';
import { TestingApp } from './testingApp';
import { files } from './files';
import { actionCreators } from '../exports';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './rootReducer'
import 'codemirror/lib/codemirror.css';
import '../dist-symlink/styles.css';

const { initFiles, setActiveFile } = actionCreators;

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <TestingApp />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(initFiles(files));
store.dispatch(setActiveFile('index.html'));
