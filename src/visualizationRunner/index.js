import React, { Component } from 'react';
import Measure from 'react-measure';
import { RunnerIFrame } from './runnerIframe';

export class VisualizationRunner extends Component {
  constructor() {
    super();
    this.state = { bounds: { width: -1, height: -1 } };
    this.onResize = ({ bounds }) => this.setState({ bounds });
  }

  render() {
    const { width, height, srcDoc } = this.props;
    const scale = this.state.bounds.width / width;

    return (
      <Measure bounds onResize={this.onResize} >
        {({ measureRef }) =>
          <div ref={measureRef} style={{height: `${height * scale}px`}} >
            <RunnerIFrame
              srcDoc={srcDoc}
              width={width}
              height={height}
              scale={scale}
            />
          </div>
        }
      </Measure>
    );
  }
}
