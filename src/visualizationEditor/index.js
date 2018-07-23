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
    onSave,
    onTextChange
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
          onTextChange={onTextChange}
        />
      </EditorGrid.Center>
    </EditorGrid>
  );
};
