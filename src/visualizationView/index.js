import React from 'react';
import { VisualizationRunner } from '../visualizationRunner/index.js';

export const VisualizationView = props => {
  const { width, height, files, runId, title, ownerUser } = props;
  return (
    <div className='visualization-view'>
      <VisualizationRunner
        files={files}
        width={width}
        height={height}
        runId={runId}
      />
      <div className='visualization-view-body'>
        <div className='visualization-view-title'>
          {title}
        </div>
        <div className='visualization-view-owner-full-name'>
          {ownerUser.fullName}
        </div>
      </div>
    </div>
  );
};
