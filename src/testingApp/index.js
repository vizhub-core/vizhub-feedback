import React, { Component } from 'react';
import { VisualizationRunner, CodeEditor } from '../exports';
import { files } from './files';

export class TestingApp extends Component {
  render() {
    return (
      <div>
        <VisualizationRunner
          width={960}
          height={500}
          files={files}
        />
        <div>Hello</div>
        <CodeEditor />
      </div>
    );
  }
}
