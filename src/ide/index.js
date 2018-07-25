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
    onFileTextChange,
    onSave,
    visualizationWidth,
    visualizationHeight
  } = props;

  return (
    <IDEGrid>
      <IDEGrid.Left>
        <VisualizationEditor
          files={files}
          activeFileName={activeFileName}
          activeFileText={activeFileText}
          onFileClick={onFileClick}
          onSave={onSave}
          onFileTextChange={onFileTextChange}
        />
      </IDEGrid.Left>
      <IDEGrid.Right>
        <VisualizationRunner
          files={files}
          width={visualizationWidth}
          height={visualizationHeight}
        />
      </IDEGrid.Right>
    </IDEGrid>
  );
};
