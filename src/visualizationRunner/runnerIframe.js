import React from 'react';
export const RunnerIFrame = ({srcDoc, width, height, scale}) => (
  <iframe
    srcDoc={srcDoc}
    width={width}
    height={height}
    title='Visualization Runner'
    style={{
      transform: `scale(${scale})`,
      transformOrigin: '0 0',
    }}
  />
);
