import React from 'react';
import { IDEGrid } from './ideGrid';
import { VisualizationEditor } from '../visualizationEditor/index';
import { VisualizationView } from '../visualizationView/index';

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
    onFileDelete,
    onFork,
    visualizationTitle
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
          onFork={onFork}
        />
        <div className='save-status'>{saveStatus}</div>
      </IDEGrid.Left>
      <IDEGrid.Right>
        <VisualizationView
          files={files}
          width={visualizationWidth}
          height={visualizationHeight}
          runId={runId}
          title={visualizationTitle}
        />
      </IDEGrid.Right>
    </IDEGrid>
  );
};
