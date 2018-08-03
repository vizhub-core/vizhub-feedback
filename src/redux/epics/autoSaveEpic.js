import { debounceTime, mapTo } from 'rxjs/operators';
import { CHANGE_FILE_TEXT } from '../actionTypes';
import { save } from '../actionCreators';
import { autoSaveDebounceTime } from '../../constants';

export const autoSaveEpic = action$ =>
  action$.ofType(CHANGE_FILE_TEXT).pipe(
    debounceTime(autoSaveDebounceTime),
    mapTo(save())
  );
