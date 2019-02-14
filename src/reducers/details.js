const initialState = {
  items: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DETAILS':
      return {
        ...state,
        items: [action.payload],
      };
    default:
      return state;
  }
};

