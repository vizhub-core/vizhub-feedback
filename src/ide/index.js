import React from 'react';
import { connect } from 'react-redux';
import { uiRedux } from '../redux/index';
import { IDE } from './ide';

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
    setActiveFile,
    createNewFile,
    renameFile,
    deleteFile
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
  onFileTextChange: (fileName, text) => dispatch(changeFileText(fileName, text)),
  onNewFileClick: () => dispatch(createNewFile()),
  onFileDoubleClick: fileName => dispatch(renameFile(fileName)),
  onFileDelete: fileName => dispatch(deleteFile(fileName))
});

export const IDEContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(props => (
  <IDE { ...props }/>
));
