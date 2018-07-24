import { combineReducers } from 'redux';
import { INIT_FILES, SET_ACTIVE_FILE } from './actionTypes';

const files = (state = [], action) => {
  switch (action.type) {
    case INIT_FILES:
      return action.files;
    default:
      return state;
  }
}

const activeFileName = (state = null, action) => {
  switch (action.type) {
    case SET_ACTIVE_FILE:
      return action.fileName;
    default:
      return state;
  }
}

export const ide = combineReducers({
  files,
  activeFileName
});
