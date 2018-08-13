import marked from 'marked';
import { merge } from 'rxjs';
import { debounceTime, map, filter } from 'rxjs/operators';
import { CHANGE_FILE_TEXT, INIT_FILES } from '../actionTypes';
import { setDescription } from '../actionCreators';
import { runDebounceTime } from '../../constants';
import { getFile } from '../selectors';

const renderMarkdown = markdownFile => {
  return markdownFile ? marked(markdownFile.text) : '';
};

export const updateDescriptionEpic = (action$, state$) =>
  merge(
    action$.ofType(INIT_FILES),
    action$.ofType(CHANGE_FILE_TEXT).pipe(
      filter(action => action.fileName === 'README.md'),
      debounceTime(runDebounceTime)
    ),
  )
  .pipe(map(action => {
    console.log('setting description');
    return setDescription(renderMarkdown(getFile(state$.value, 'README.md')))
  }));
