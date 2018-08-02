import { from } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { DELETE_FILE } from '../actionTypes';
import { fileDeleted } from '../actionCreators';

export const confirmDeleteEpic = action$ =>
  action$.ofType(DELETE_FILE).pipe(
    map(action => (
      window.confirm('Are you sure?')
        ? fileDeleted(action.fileName)
        : null
    )),
    filter(Boolean)
  );
