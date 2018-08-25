import React from 'react';
import SplitPane from 'react-split-pane';

export const IDEGrid = ({children}) => (
  <div className='ide-grid'>
    <SplitPane split='vertical' defaultSize='50%'>
      { 
        children
      }
    </SplitPane>
  </div>
);

IDEGrid.Left = ({children}) => (
  <div className='ide-grid-left'>
    { children }
  </div>
);

IDEGrid.Right = ({children}) => (
  <div className='ide-grid-right'>
    { children }
  </div>
);
