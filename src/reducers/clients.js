
const initialState = {
  isReady: false,
  items: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {

      case 'FETCH_ERROR': 
      return {
        ...state,
        isReady: false,
        error: action.payload,
      };
      break;
      case 'SET_CLIENTS':
      return {
        ...state,
        isReady: true,
        items: action.payload,
      };
      default:
      return state;
  }
};


