import React from 'react';
import { IDEGrid } from './ideGrid';
import { VisualizationEditor } from '../visualizationEditor';
import { VisualizationRunner } from '../visualizationRunner';

export const IDE = props => {
  const {
    files,
    activeFileName,
    activeFileText,
    onFileClick,
    onSave,
    onTextChange,
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
          onTextChange={onTextChange}
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
