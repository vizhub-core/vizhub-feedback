import React, { Component } from 'react';
import Measure from 'react-measure';
import { RunnerIFrame } from './runnerIframe';
import { computeScale } from './computeScale';

export class VisualizationRunner extends Component {
  constructor() {
    super();
    this.state = { bounds: { width: -1, height: -1 } };
    this.onResize = ({ bounds }) => this.setState({ bounds });
  }

  render() {
    const { width, height, srcDoc } = this.props;
    const scale = computeScale(this.state.bounds.width, width);

    return (
      <Measure bounds onResize={this.onResize} >
        {({ measureRef }) =>
          <div ref={measureRef} >
            <RunnerIFrame {...{width, height, srcDoc, scale}} />
          </div>
        }
      </Measure>
    );
  }
}
