import React from 'react';
import { VisualizationRunner } from '../visualizationRunner/index.js';

export const VisualizationFullscreen = props => {
  const { width, height, files } = props;

  return (
    <div className='visualization-fullscreen' >
      <VisualizationRunner
        files={files}
        width={width}
        height={height}
        runId='once'
      />
    </div>
  );
};
