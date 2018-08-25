import React from 'react';
import { EditorGrid } from './editorGrid';
import { CodeEditor } from './codeEditor';
import { FileList } from './fileList';
import { preventDefault } from '../utils/preventDefault'

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
          onClick={preventDefault(onNewFileClick)}
        >
          new file
        </a>
        <a
          className='action-link'
          href='#fork'
          title='Fork this visualization'
          onClick={preventDefault(onFork)}
        >
          fork
        </a>
        <a
          className='action-link preview'
          href='https://github.com/datavis-tech/vizhub-ui/issues/43'
          title='Download the code for this visualization'
        >
          download
        </a>
        <a
          className='action-link preview'
          href='https://github.com/datavis-tech/vizhub-ui/issues/88'
          title='Delete this visualization'
        >
          delete
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
