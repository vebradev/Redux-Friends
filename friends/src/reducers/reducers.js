import { FETCH_FRIENDS } from "../actions/actionTypes";

export const friendsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_FRIENDS:
      return action.payload;
    default:
      return state;
  }
};
