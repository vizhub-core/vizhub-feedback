import { combineReducers } from 'redux';

import { files } from './files';
import { activeFileName } from './activeFileName';
import { visualizationWidth } from './visualizationWidth';
import { visualizationHeight } from './visualizationHeight';
import { runId } from './runId';
import { saveStatus } from './saveStatus';

export const ide = combineReducers({
  files,
  activeFileName,
  visualizationWidth,
  visualizationHeight,
  runId,
  saveStatus
});
