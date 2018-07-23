const editorPrefix = name => `vizhub-ui/editor/${name}`;

export const INIT_FILES = editorPrefix('INIT_FILES');
export const CHANGE_ACTIVE_FILE_TEXT = editorPrefix('CHANGE_ACTIVE_FILE_TEXT');
export const SET_ACTIVE_FILE = editorPrefix('SET_ACTIVE_FILE');
export const BUILD_FILES = editorPrefix('BUILD_FILES');
export const EXECUTE_BUILD = editorPrefix('EXECUTE_BUILD');
export const SAVE = editorPrefix('SAVE');
