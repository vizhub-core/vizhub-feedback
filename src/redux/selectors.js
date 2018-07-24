export const getFiles = state => state.ide.files;

export const getActiveFileName = state => state.ide.activeFileName;

export const getActiveFileText = state => {
  const files = getFiles(state);
  const activeFileName = getActiveFileName(state);
  return files && activeFileName
    ? files.find(({name}) => name === activeFileName).text
    : '';
};

// TODO add these to state
export const getVisualizationWidth = () => 960;
export const getVisualizationHeight = () => 500;
