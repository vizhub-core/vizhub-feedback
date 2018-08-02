import React from 'react';
import { render } from 'react-dom';
import { TestingApp } from './testingApp';
import { files } from './files';
import { uiRedux } from '../exports';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { rootReducer } from './rootReducer';
import { saveSimulationEpic } from './saveSimulationEpic';
import 'codemirror/lib/codemirror.css';
import '../dist-symlink/styles.css';

const {
  actionCreators: {
    initFiles,
    setActiveFile,
    setVisualizationWidth,
    setVisualizationHeight
  },
  epics: {
    runEpic,
    autoSaveEpic,
    promptForNewFileNameEpic,
    promptForRenameEpic
  }
} = uiRedux;

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(combineEpics(
  runEpic,
  autoSaveEpic,
  saveSimulationEpic,
  promptForNewFileNameEpic,
  promptForRenameEpic
));

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
