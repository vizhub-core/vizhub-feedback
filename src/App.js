import React, { Component } from 'react';
import { VisualizationRunner } from './visualizationRunner';

class App extends Component {
  render() {
    return (
      <div>
        <VisualizationRunner
          width={960}
          height={500}
          srcDoc='Hello visualizationRunner'
        />
        <div>Hello</div>
      </div>
    );
  }
}

export default App;
