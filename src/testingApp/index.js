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

const store = createStore(rootReducer);

const {
  initFiles,
  setActiveFile,
  setVisualizationWidth,
  setVisualizationHeight
} = actionCreators;

store.dispatch(initFiles(files));
store.dispatch(setActiveFile('index.html'));
store.dispatch(setVisualizationWidth(960));
store.dispatch(setVisualizationHeight(500));    

render(
  <Provider store={store}>
    <TestingApp />
  </Provider>,
  document.getElementById('root')
);
