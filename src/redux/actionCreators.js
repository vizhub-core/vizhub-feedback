import {
  INIT_FILES,
  CHANGE_FILE_TEXT,
  SET_ACTIVE_FILE,
  SAVE,
  SAVE_SUCCESS,
  SAVE_ERROR,
  SET_VISUALIZATION_WIDTH,
  SET_VISUALIZATION_HEIGHT,
  RUN_FILES,
  CREATE_NEW_FILE,
  NEW_FILE_CREATED,
  RENAME_FILE,
  FILE_RENAMED,
  DELETE_FILE,
  FILE_DELETED
} from './actionTypes';

export const initFiles = files => ({
  type: INIT_FILES,
  files
});

export const changeFileText = (fileName, text) => ({
  type: CHANGE_FILE_TEXT,
  fileName,
  text
});

export const setActiveFile = fileName => ({
  type: SET_ACTIVE_FILE,
  fileName
});

export const save = () => ({
  type: SAVE
});

export const setVisualizationWidth = width => ({
  type: SET_VISUALIZATION_WIDTH,
  width
});

export const setVisualizationHeight = height => ({
  type: SET_VISUALIZATION_HEIGHT,
  height
});

export const runFiles = () => ({
  type: RUN_FILES
});

export const saveSuccess = () => ({
  type: SAVE_SUCCESS
});

export const saveError = error => ({
  type: SAVE_ERROR,
  error
});

export const createNewFile = () => ({
  type: CREATE_NEW_FILE
});

export const newFileCreated = fileName => ({
  type: NEW_FILE_CREATED,
  fileName
});

export const renameFile = fileName => ({
  type: RENAME_FILE,
  fileName
});

export const fileRenamed = (oldFileName, newFileName) => ({
  type: FILE_RENAMED,
  oldFileName,
  newFileName
});

export const deleteFile = fileName => ({
  type: DELETE_FILE,
  fileName
});

export const fileDeleted = fileName => ({
  type: FILE_DELETED,
  fileName
});

export const forkVisualization = () => ({
  type: FORK_VISUALIZATION
});

export const forkSuccess = (id, userName) => ({
  type: FORK_SUCCESS,
  id,
  userName
});

export const forkError = () => ({
  type: FORK_ERROR
});
