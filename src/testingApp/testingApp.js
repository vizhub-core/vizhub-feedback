import React from 'react';
import { connect } from 'react-redux';
import {
  FullPage,
  IDE,
  actionCreators,
  selectors
} from '../exports';

const { changeActiveFileText, save, setActiveFile } = actionCreators;
const { getFiles, getActiveFileName, getActiveFileText } = selectors;

const mapStateToProps = state => {
  return {
    files: getFiles(state),
    activeFileName: getActiveFileName(state),
    activeFileText: getActiveFileText(state)
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
    <IDE {...props} />
  </FullPage>
));
