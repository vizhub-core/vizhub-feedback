import React from 'react';
export const RunnerIFrame = ({srcDoc, width, height, scale}) => (
  <iframe
    srcDoc={srcDoc}
    width={width}
    height={height}
    style={{
      transform: `scale(${scale})`,
      transformOrigin: '0 0',
    }}
  />
);
