import React, { Component } from 'react';
import { VisualizationRunner } from './visualizationRunner';

class App extends Component {
  render() {
    return (
      <VisualizationRunner
        width={960}
        height={500}
        srcDoc='Hello visualizationRunner'
      />
    );
  }
}

export default App;
