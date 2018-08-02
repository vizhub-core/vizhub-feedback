import { SET_ACTIVE_FILE, FILE_RENAMED } from '../actionTypes';

export const activeFileName = (state = null, action) => {
  switch (action.type) {
    case SET_ACTIVE_FILE:
      return action.fileName;
    case FILE_RENAMED:
      if (state === action.oldFileName) {
        return action.newFileName;
      }
    default:
      return state;
  }
};
