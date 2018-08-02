import unionBy from 'lodash/fp/unionBy';
import { combineReducers } from 'redux';
import { SET_VISUALIZATION_WIDTH } from '../actionTypes';

export const visualizationWidth = (state = -1, action) => {
  switch (action.type) {
    case SET_VISUALIZATION_WIDTH:
      return action.width;
    default:
      return state;
  }
};
