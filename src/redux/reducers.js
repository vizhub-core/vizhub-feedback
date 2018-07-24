import { combineReducers } from 'redux';
import {
  INIT_FILES,
  SET_ACTIVE_FILE,
  CHANGE_FILE_TEXT 
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
