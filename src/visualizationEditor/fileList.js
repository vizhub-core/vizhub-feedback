import React from 'react';
import classNames from 'classnames';

export const FileList = props => {
  const {
    files,
    activeFileName,
    onFileClick,
    onFileDoubleClick
  } = props;

  const isActive = file => file.name === activeFileName;

  return (
    <React.Fragment>
      {
        files.map(file => (
          <div
            key={file.name}
            className={classNames('file', { active: isActive(file) })}
            onClick={() => onFileClick(file.name)}
            onDoubleClick={() => onFileDoubleClick(file.name)}
          >
            { file.name }
          </div>
        ))
      }
    </React.Fragment>
  );
};
