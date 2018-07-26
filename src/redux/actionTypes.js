const editorPrefix = name => `vizhub-ui/editor/${name}`;

export const INIT_FILES = editorPrefix('INIT_FILES');
export const CHANGE_FILE_TEXT = editorPrefix('CHANGE_ACTIVE_FILE_TEXT');
export const SET_ACTIVE_FILE = editorPrefix('SET_ACTIVE_FILE');
export const RUN_FILES = editorPrefix('RUN_FILES');
export const SAVE = editorPrefix('SAVE');
export const SET_VISUALIZATION_WIDTH = editorPrefix('SET_VISUALIZATION_WIDTH');
export const SET_VISUALIZATION_HEIGHT = editorPrefix('SET_VISUALIZATION_HEIGHT');
