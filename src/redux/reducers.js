import { combineReducers } from 'redux';
import {
  INIT_FILES,
  SET_ACTIVE_FILE,
  CHANGE_FILE_TEXT,
  SET_VISUALIZATION_WIDTH,
  SET_VISUALIZATION_HEIGHT,
  RUN_FILES
} from './actionTypes';

const files = (state = [], action) => {
  switch (action.type) {
    case INIT_FILES:
      return action.files;
    case CHANGE_FILE_TEXT:
      return state.map(file => (
        file.name === action.fileName
          ? Object.assign(file, { text: action.text })
          : file
      ));
    default:
      return state;
  }
};

const activeFileName = (state = null, action) => {
  switch (action.type) {
    case SET_ACTIVE_FILE:
      return action.fileName;
    default:
      return state;
  }
};

const visualizationWidth = (state = -1, action) => {
  switch (action.type) {
    case SET_VISUALIZATION_WIDTH:
      return action.width;
    default:
      return state;
  }
};

const visualizationHeight = (state = -1, action) => {
  switch (action.type) {
    case SET_VISUALIZATION_HEIGHT:
      return action.height;
    default:
      return state;
  }
};

const generateRunId = () => Math.random().toString(36).substr(2);
const runId = (state = generateRunId(), action) => {
  switch (action.type) {
    case RUN_FILES:
      console.log('here');
      return generateRunId();
    default:
      return state;
  }
}

export const ide = combineReducers({
  files,
  activeFileName,
  visualizationWidth,
  visualizationHeight,
  runId
});
