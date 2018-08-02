import unionBy from 'lodash/fp/unionBy';
import { INIT_FILES, CHANGE_FILE_TEXT, BUILD_FINISHED } from '../actionTypes';

export const files = (state = [], action) => {
  switch (action.type) {
    case INIT_FILES:
      return action.files;
    case CHANGE_FILE_TEXT:
      return state.map(file => (
        file.name === action.fileName
          ? Object.assign(file, { text: action.text })
          : file
      ));
    case BUILD_FINISHED:
      return unionBy(file => file.name)(action.files)(state);
    default:
      return state;
  }
};
