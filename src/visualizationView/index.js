import React from 'react';
import { VisualizationRunner } from '../visualizationRunner/index.js';

export const VisualizationView = props => {
  const { width, height, files, runId, title, description, ownerUser } = props;
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
        <a href={`/${ownerUser.userName}`} >
          {ownerUser.fullName}
        </a>
        <div
          className='visualization-view-description'
          dangerouslySetInnerHTML={{
            __html: description
          }}
        >
        </div>
      </div>
    </div>
  );
};
