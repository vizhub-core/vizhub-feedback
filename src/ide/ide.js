import React from 'react';
import { IDEGrid } from './ideGrid';
import { VisualizationEditor } from '../visualizationEditor/index';
import { VisualizationRunner } from '../visualizationRunner/index';

export const IDE = props => {
  const {
    files,
    activeFileName,
    activeFileText,
    onFileClick,
    onFileDoubleClick,
    onFileTextChange,
    onNewFileClick,
    visualizationWidth,
    visualizationHeight,
    runId,
    saveStatus,
    onFileDelete
  } = props;

  return (
    <IDEGrid>
      <IDEGrid.Left>
        <VisualizationEditor
          files={files}
          activeFileName={activeFileName}
          activeFileText={activeFileText}
          onFileClick={onFileClick}
          onFileDoubleClick={onFileDoubleClick}
          onFileTextChange={onFileTextChange}
          onNewFileClick={onNewFileClick}
          onFileDelete={onFileDelete}
        />
        <div className='save-status'>{saveStatus}</div>
      </IDEGrid.Left>
      <IDEGrid.Right>
        <VisualizationRunner
          files={files}
          width={visualizationWidth}
          height={visualizationHeight}
          runId={runId}
        />
      </IDEGrid.Right>
    </IDEGrid>
  );
};
