import { combineReducers } from 'redux';

import { files } from './files';
import { activeFileName } from './activeFileName';
import { visualizationWidth } from './visualizationWidth';
import { visualizationHeight } from './visualizationHeight';
import { visualizationOwnerUser } from './visualizationOwnerUser';
import { runId } from './runId';
import { saveStatus } from './saveStatus';
import { visualizationTitle } from './visualizationTitle';
import { visualizationDescription } from './visualizationDescription';

export const ide = combineReducers({
  files,
  activeFileName,
  visualizationWidth,
  visualizationHeight,
  visualizationOwnerUser,
  runId,
  saveStatus,
  visualizationTitle,
  visualizationDescription,
});
