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
    onFileDoubleClick,
    onFileTextChange,
    onNewFileClick,
    onFileDelete,
    onFork
  } = props;

  const onNewFileLinkClick = event => {
    event.preventDefault();
    onNewFileClick();
  };

  return (
    <EditorGrid>
      <EditorGrid.Left>
        <FileList
          files={files}
          activeFileName={activeFileName}
          onFileClick={onFileClick}
          onFileDoubleClick={onFileDoubleClick}
          onFileDelete={onFileDelete}
        />
        <a
          className='action-link'
          href='#new-file'
          title='Create a new file'
          onClick={onNewFileLinkClick}
        >
          new file
        </a>
        <a
          className='action-link'
          href='#fork'
          title='Fork this visualization'
          onClick={onFork}
        >
          fork
        </a>
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
