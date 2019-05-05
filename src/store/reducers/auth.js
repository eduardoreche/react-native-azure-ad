import { AUTH_SET_TOKEN } from '../actions/actionTypes';

const initialState = {
  token: null,
  expiryDate: null
};

const reducer = (state = initialState, action) => {
  const { token, expiryDate } = action;
  console.log(action.type, action);
  switch (action.type) {
    case AUTH_SET_TOKEN:
      return {
        ...state,
        token,
        expiryDate
      };
    default:
      return state;
  }
};

export default reducer;
