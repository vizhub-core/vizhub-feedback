import React from 'react';
export const RunnerIFrame = ({srcDoc, width, height, scale}) => (
  <iframe
    {...{srcDoc, width, height}}
    title='Visualization Runner'
    style={{
      transform: `scale(${scale})`,
      transformOrigin: '0 0',
    }}
  />
);
