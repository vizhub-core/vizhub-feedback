import { debounceTime, map } from 'rxjs/operators';
import { combineEpics } from 'redux-observable';
import { CHANGE_FILE_TEXT, INIT_FILES } from '../actionTypes';
import { setTitle } from '../actionCreators';
import { runDebounceTime } from '../../constants';
import { getFile } from '../selectors';

const extractTitle = html => {
  const titleMatch = html.text.match(/<title>(.*?)<\/title>/i);
  return titleMatch ? titleMatch[1] : 'Untitled';
};

export const updateTitleEpic = (action$, state$) =>
  action$.ofType(INIT_FILES, CHANGE_FILE_TEXT).pipe(
    debounceTime(runDebounceTime),
    map(action => setTitle(extractTitle(getFile(state$.value, 'index.html'))))
  );
