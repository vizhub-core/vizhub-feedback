import React from 'react';
import { connect } from 'react-redux';
import { FullPage, IDE, actionCreators, selectors } from '../exports';

const {
  getFiles,
  getActiveFileName,
  getActiveFileText,
  getVisualizationWidth,
  getVisualizationHeight,
  getRunId,
  getSaveStatus
} = selectors;

const {
  changeFileText,
  setActiveFile
} = actionCreators;

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
