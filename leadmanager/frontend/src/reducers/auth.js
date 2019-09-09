import { USER_LOADED, USER_LOADING, AUTH_ERROR } from '../actions/types';

const initialstate = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  user: null
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOADED:
      return {
        ...state,
        isLoading: false,
        user: action.payload
      };

    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        user: null,
        token: null
      };
    default:
      return state;
  }
};

export default reducer;
