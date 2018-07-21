import React, { Component } from 'react';
import Measure from 'react-measure';
import { RunnerIFrame } from './runnerIframe';
import { computeScale } from './computeScale';
import { computeSrcDoc } from './computeSrcDoc';

export class VisualizationRunner extends Component {
  constructor() {
    super();
    this.state = { bounds: { width: -1, height: -1 } };
    this.onResize = ({ bounds }) => this.setState({ bounds });
  }

  render() {
    const { width, height, files } = this.props;
    const boundsWidth = this.state.bounds.width;

    const scale = computeScale(boundsWidth, width);

    // TODO optimize this heavyweight operation,
    // only compute srcDoc if files changed.
    const srcDoc = computeSrcDoc(files);

    return (
      <Measure bounds onResize={this.onResize} >
        {({ measureRef }) =>
          <div ref={measureRef} style={{height: `${height * scale}px`}} >
            <RunnerIFrame
              width={width}
              height={height}
              scale={scale}
              srcDoc={srcDoc}
            />
          </div>
        }
      </Measure>
    );
  }
}
