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
    setVisualizationHeight,
    setVisualizationId,
    setVisualizationOwnerUser
  },
  epics: {
    runEpic,
    autoSaveEpic,
    promptForNewFileNameEpic,
    promptForRenameEpic,
    confirmDeleteEpic,
    updateTitleEpic,
    updateDescriptionEpic
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
  promptForRenameEpic,
  confirmDeleteEpic,
  updateTitleEpic,
  updateDescriptionEpic
));

store.dispatch(initFiles(files));
store.dispatch(setActiveFile('index.html'));
store.dispatch(setVisualizationWidth(960));
store.dispatch(setVisualizationHeight(500));    
store.dispatch(setVisualizationId('1234'));    
store.dispatch(setVisualizationOwnerUser({
  id: "84752",
  userName: "joe",
  fullName: "Joe Schmoe",
  avatarUrl: "https://avatars3.githubusercontent.com/u/84752?v=4",
}));    

render(
  <Provider store={store}>
    <TestingApp />
  </Provider>,
  document.getElementById('root')
);
