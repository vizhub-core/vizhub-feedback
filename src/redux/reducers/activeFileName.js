import { SET_ACTIVE_FILE, } from '../actionTypes';

export const activeFileName = (state = null, action) => {
  switch (action.type) {
    case SET_ACTIVE_FILE:
      return action.fileName;
    default:
      return state;
  }
};
