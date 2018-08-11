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
    getSaveStatus,
    getVisualizationTitle,
    getVisualizationOwnerUser,
  },
  actionCreators: {
    changeFileText,
    setActiveFile,
    createNewFile,
    renameFile,
    deleteFile,
    forkVisualization
  }
} = uiRedux;

const mapStateToProps = state => ({
  files: getFiles(state),
  activeFileName: getActiveFileName(state),
  activeFileText: getActiveFileText(state),
  visualizationWidth: getVisualizationWidth(state),
  visualizationHeight: getVisualizationHeight(state),
  runId: getRunId(state),
  saveStatus: getSaveStatus(state),
  visualizationTitle: getVisualizationTitle(state),
  visualizationOwnerUser: getVisualizationOwnerUser(state),
});

const mapDispatchToProps = dispatch => ({
  onFileClick: fileName => dispatch(setActiveFile(fileName)),
  onFileTextChange: (fileName, text) => dispatch(changeFileText(fileName, text)),
  onNewFileClick: () => dispatch(createNewFile()),
  onFileDoubleClick: fileName => dispatch(renameFile(fileName)),
  onFileDelete: fileName => dispatch(deleteFile(fileName)),
  onFork: () => dispatch(forkVisualization()),
});

export const IDEContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(props => (
  <IDE { ...props }/>
));
