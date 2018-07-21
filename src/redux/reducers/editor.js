export const editor = (state = {}, action) => {
  switch (action.type) {
    case 'INITIALIZE_FILES':
      return Object.assign({}, state, {
        files: action.files
      });
    default:
      return state;
  }
}
