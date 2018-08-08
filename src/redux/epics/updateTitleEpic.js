import { debounceTime, map } from 'rxjs/operators';
import { combineEpics } from 'redux-observable';
import { CHANGE_FILE_TEXT, INIT_FILES } from '../actionTypes';
import { setTitle } from '../actionCreators';
import { runDebounceTime } from '../../constants';
import { getFiles } from '../selectors';

const extractTitle = files => {
  const indexHTML = files.filter(file => file.name === 'index.html')[0];
  const titleMatch = indexHTML.text.match(/<title>(.*?)<\/title>/i);
  return titleMatch ? titleMatch[1] : 'Untitled';
};

const updateTitleOnChangeFileText = (action$, state$) =>
  action$.ofType(CHANGE_FILE_TEXT).pipe(
    debounceTime(runDebounceTime),
    map(action => setTitle(extractTitle(getFiles(state$.value))))
  );

const updateTitleOnInitFiles = (action$, state$) =>
  action$.ofType(INIT_FILES).pipe(
    map(action => setTitle(extractTitle(getFiles(state$.value))))
  );

export const updateTitleEpic = combineEpics(
  updateTitleOnChangeFileText,
  updateTitleOnInitFiles
);
