import React from 'react';
import { render } from 'react-dom';
import { TestingApp } from './testingApp';
import { files } from './files';
import { actionCreators } from '../exports';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer } from './rootReducer';
import 'codemirror/lib/codemirror.css';
import '../dist-symlink/styles.css';

import { CHANGE_FILE_TEXT, RUN_FILES } from '../redux/actionTypes';
import { debounceTime, mapTo } from 'rxjs/operators';

const runEpic = action$ =>
  action$.ofType(CHANGE_FILE_TEXT).pipe(
    debounceTime(700),
    mapTo({ type: RUN_FILES })
  );

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(runEpic);

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
