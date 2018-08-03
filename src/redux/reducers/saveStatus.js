import {
  CHANGE_FILE_TEXT,
  SAVE,
  SAVE_SUCCESS,
  SAVE_ERROR
} from '../actionTypes';

export const saveStatus = (state = 'Saved', action) => {
  switch (action.type) {
    case SAVE:
      return 'Saving';
    case SAVE_SUCCESS:
      return 'Saved';
    case SAVE_ERROR:
      return action.error;
    case CHANGE_FILE_TEXT:
      return '';
    default:
      return state;
  }
};
