import * as types from "../actions/actionTypes";

const initialState = {
  friends: [],
  isLoading: false,
  error: ""
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_FRIENDS:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case types.FETCH_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        isLoading: false,
        error: ""
      };
    case types.FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.ADD_FRIEND:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case types.ADD_FRIEND_SUCCESS:
      return {
        friends: action.payload,
        isLoading: false,
        error: ""
      };
    case types.ADD_FRIEND_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
