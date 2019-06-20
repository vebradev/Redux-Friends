// import axios from 'axios';
import axiosAuth from '../axios';
import * as types from "./actionTypes";

export const fetchFriends = () => dispatch => {
  dispatch({ type: types.FETCH_FRIENDS });
  axiosAuth()
    .get("http://localhost:5000/api/friends")
    .then(res => dispatch({ type: types.FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: types.FETCH_FAIL, payload: err.message }));
};