export const getFiles = state => state.files;

export const getActiveFileName = state => state.activeFileName;

export const getActiveFileText = state => {
  const files = getFiles(state);
  const activeFileName = getActiveFileName(state);
  const activeFile = files.find(({name}) => name === activeFileName);
  return activeFile ? activeFile.text : '';
};
  
  
