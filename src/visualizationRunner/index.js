import React, { Component } from 'react';
import Measure from 'react-measure';
import { RunnerIFrame } from './runnerIframe';
import { computeScale } from './computeScale';
import { GetSrcDoc } from './getSrcDoc';

export class VisualizationRunner extends Component {
  constructor() {
    super();
    this.state = { bounds: { width: -1, height: -1 } };
    this.onResize = ({ bounds }) => this.setState({ bounds });
    this.getSrcDoc = GetSrcDoc();
  }

  render() {
    const { width, height, files, runId, measureHeight } = this.props;
    const boundsWidth = this.state.bounds.width;
    const boundsHeight = measureHeight ? this.state.bounds.height : Infinity;
    const scale = computeScale({ boundsWidth, boundsHeight, width, height });
    const srcDoc = this.getSrcDoc(files, runId);
    return (
      <Measure bounds onResize={this.onResize} >
        {({ measureRef }) =>
          <div ref={measureRef} style={measureHeight ? { height: '100%' } : {}} >
            <div style={{height: `${height * scale}px`}} >
              <RunnerIFrame
                width={width}
                height={height}
                scale={scale}
                srcDoc={srcDoc}
                runId={runId}
              />
            </div>
          </div>
        }
      </Measure>
    );
  }
}
