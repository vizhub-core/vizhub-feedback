import { CHANGE_FILE_TEXT, RUN_FILES } from '../redux/actionTypes';
import { debounceTime, mapTo } from 'rxjs/operators';

export const runEpic = action$ =>
  action$.ofType(CHANGE_FILE_TEXT).pipe(
    debounceTime(500),
    mapTo({ type: RUN_FILES })
  );
