import { combineReducers } from 'redux';
import { reducers } from '../exports';
const { editor } = reducers;
export default combineReducers({ editor });
