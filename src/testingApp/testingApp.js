import React from 'react';
import { connect } from 'react-redux';
import {
  FullPage,
  IDE,
  actionCreators,
  selectors
} from '../exports';

const {
  changeActiveFileText,
  save,
  setActiveFile
} = actionCreators;

const {
  getFiles,
  getActiveFileName,
  getActiveFileText,
  getVisualizationWidth,
  getVisualizationHeight
} = selectors;

const mapStateToProps = state => {
  console.log(state);
  return {
    files: getFiles(state),
    activeFileName: getActiveFileName(state),
    activeFileText: getActiveFileText(state),
    visualizationWidth: getVisualizationWidth(state),
    visualizationHeight: getVisualizationHeight(state)
  }
};

const mapDispatchToProps = dispatch => ({
  onFileClick: fileName => dispatch(setActiveFile(fileName)),
  onSave: () => dispatch(save()),
  onTextChange: text => dispatch(changeActiveFileText(text))
});

export const TestingApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(props => (
  <FullPage>
    <IDE
      files={props.files}
      activeFileName={props.activeFileName}
      activeFileText={props.activeFileText}
      onFileClick={props.onFileClick}
      onSave={props.onSave}
      onTextChange={props.onTextChange}
      visualizationWidth={props.visualizationWidth}
      visualizationHeight={props.visualizationHeight}
    />
  </FullPage>
));
