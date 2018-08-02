import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { DELETE_FILE } from '../actionTypes';
import { fileDeleted } from '../actionCreators';

export const confirmDeleteEpic = action$ =>
  action$.ofType(DELETE_FILE).pipe(
    map(action => {
      const confirmed = window.confirm('Are you sure?');
      if (confirmed) {
        return fileDeleted(action.fileName);
      }
      return null;
    })
  );
