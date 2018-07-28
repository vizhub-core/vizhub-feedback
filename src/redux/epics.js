import { debounceTime, mapTo } from 'rxjs/operators';
import { CHANGE_FILE_TEXT } from '../redux/actionTypes';
import { runFiles, save } from '../redux/actionCreators';
import { runDebounceTime, autoSaveDebounceTime } from '../constants';

export const runEpic = action$ =>
  action$.ofType(CHANGE_FILE_TEXT).pipe(
    debounceTime(runDebounceTime),
    mapTo(runFiles())
  );

export const autoSaveEpic = action$ =>
  action$.ofType(CHANGE_FILE_TEXT).pipe(
    debounceTime(autoSaveDebounceTime),
    mapTo(save())
  );
