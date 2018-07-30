import React from 'react';
import { EditorGrid } from './editorGrid';
import { CodeEditor } from './codeEditor';
import { FileList } from './fileList';

export const VisualizationEditor = props => {
  const {
    files,
    activeFileName,
    activeFileText,
    onFileClick,
    onFileTextChange
  } = props;

  return (
    <EditorGrid>
      <EditorGrid.Left>
        <FileList
          files={files}
          activeFileName={activeFileName}
          onFileClick={onFileClick}
        />
        <a className='action-link' href='https://github.com/datavis-tech/vizhub-ui/issues/26'>new file</a>
      </EditorGrid.Left>
      <EditorGrid.Center>
        <CodeEditor
          fileName={activeFileName}
          value={activeFileText}
          onTextChange={text => onFileTextChange(activeFileName, text)}
        />
      </EditorGrid.Center>
    </EditorGrid>
  );
};
