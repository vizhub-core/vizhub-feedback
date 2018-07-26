import { CHANGE_FILE_TEXT } from '../redux/actionTypes';
import { runFiles } from '../redux/actionCreators';
import { debounceTime, mapTo } from 'rxjs/operators';

export const runEpic = action$ =>
  action$.ofType(CHANGE_FILE_TEXT).pipe(
    debounceTime(500),
    mapTo(runFiles())
  );
