import React from 'react';
import { connect } from 'react-redux';
import { FullPage, IDE, uiRedux } from '../exports';

const {
  selectors: {
    getFiles,
    getActiveFileName,
    getActiveFileText,
    getVisualizationWidth,
    getVisualizationHeight,
    getRunId,
    getSaveStatus
  },
  actionCreators: {
    changeFileText,
    setActiveFile
  }
} = uiRedux;

const mapStateToProps = state => ({
  files: getFiles(state),
  activeFileName: getActiveFileName(state),
  activeFileText: getActiveFileText(state),
  visualizationWidth: getVisualizationWidth(state),
  visualizationHeight: getVisualizationHeight(state),
  runId: getRunId(state),
  saveStatus: getSaveStatus(state)
});

const mapDispatchToProps = dispatch => ({
  onFileClick: fileName => dispatch(setActiveFile(fileName)),
  onFileTextChange: (fileName, text) => dispatch(changeFileText(fileName, text))
});

export const TestingApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(props => (
  <FullPage>
    <IDE {...props} />
  </FullPage>
));
