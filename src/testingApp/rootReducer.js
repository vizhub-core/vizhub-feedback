import { combineReducers } from 'redux';
import { reducers } from '../exports';

const { files } = reducers;

export const rootReducer = combineReducers({ files });
