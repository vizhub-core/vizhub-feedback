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
    onFileTextChange,
    onSave
  } = props;

  return (
    <EditorGrid>
      <EditorGrid.Left>
        <FileList
          files={files}
          activeFileName={activeFileName}
          onFileClick={onFileClick}
        />
      </EditorGrid.Left>
      <EditorGrid.Center>
        <CodeEditor
          value={activeFileText}
          onSave={onSave}
          onTextChange={text => onFileTextChange(activeFileName, text)}
        />
      </EditorGrid.Center>
    </EditorGrid>
  );
};
