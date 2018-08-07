import React, { Fragment } from 'react';
import { VisualizationRunner } from '../visualizationRunner/index.js';

export const VisualizationView = props => {
  const { width, height, files, runId, title } = props;
  return (
    <Fragment>
      <VisualizationRunner
        files={files}
        width={width}
        height={height}
        runId={runId}
      />
      <div>
        {title}
      </div>
    </Fragment>
  );
};
