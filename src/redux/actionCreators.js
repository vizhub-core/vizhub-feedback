import {
  INIT_FILES,
  CHANGE_ACTIVE_FILE_TEXT,
  SET_ACTIVE_FILE,
  SAVE
} from './actionTypes';

export const initFiles = files => ({
  type: INIT_FILES,
  files
});

export const changeActiveFileText = text => ({
  type: CHANGE_ACTIVE_FILE_TEXT,
  text
});

export const setActiveFile = fileName => ({
  type: SET_ACTIVE_FILE,
  fileName
});

export const save = () => ({
  type: SAVE
});
