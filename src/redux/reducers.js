import { INIT_FILES } from './actionTypes';

export const files = (state = [], action) => {
  switch (action.type) {
    case INIT_FILES:
      return action.files;
    default:
      return state;
  }
}
