import { combineReducers } from 'redux';
import { reducers } from '../exports';

const { ide } = reducers;

export const rootReducer = combineReducers({ ide });
