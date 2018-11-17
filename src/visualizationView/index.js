import React from 'react';
import { VisualizationRunner } from '../visualizationRunner/index.js';

export const VisualizationView = props => {
  const {
    width,
    height,
    files,
    runId,
    title,
    description,
    ownerUser,
    disablePointerEvents
  } = props;

  const pointerEvents = disablePointerEvents ? 'none' : 'auto';

  return (
    <div className='visualization-view' style={{ pointerEvents }} >
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
        <a className='test-vis-view-user-name' href={`/${ownerUser.userName}`} >
          <img style={{borderRadius: '10px', marginBottom: '-5px'}} height="20" width="20" src={ownerUser.avatarUrl} />
          {ownerUser.userName}
        </a>
        <div
          className='visualization-view-description'
          dangerouslySetInnerHTML={{ __html: description }}
        >
        </div>
      </div>
      <div className='license-info'>All code in VizHub is released under the MIT License.</div>
    </div>
  );
};
