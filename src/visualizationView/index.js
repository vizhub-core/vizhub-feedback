import React from 'react';
import { VisualizationRunner } from '../visualizationRunner/index.js';

const Avatar = ({avatarUrl}) => (
  <img
    style={{
      borderRadius: '15px',
      marginBottom: '-10px',
      marginRight: '5px'
    }}
    height='30'
    width='30'
    src={avatarUrl+'&s=60'}
  />
);
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
          <Avatar avatarUrl={ownerUser.avatarUrl}/>
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
