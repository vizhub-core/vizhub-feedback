import { debounceTime, mapTo } from 'rxjs/operators';
import { CHANGE_FILE_TEXT } from '../actionTypes';
import { runFiles } from '../actionCreators';
import { runDebounceTime } from '../../constants';

export const runEpic = action$ =>
  action$.ofType(CHANGE_FILE_TEXT).pipe(
    debounceTime(runDebounceTime),
    mapTo(runFiles())
  );
