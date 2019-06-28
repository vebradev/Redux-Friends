import axios from 'axios';
import axiosAuth from '../axios';
import * as types from "./actionTypes";

export const fetchFriends = () => dispatch => {
  dispatch({ type: types.FETCH_FRIENDS });
  axiosAuth()
    .get("http://localhost:5000/api/friends")
    .then(res => dispatch({ type: types.FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: types.FETCH_FAIL, payload: err.message }));
};

export const login = (userCredential) => (dispatch) => {
	dispatch({ type: types.LOGIN });
	axios
  .post('http://localhost:5000/api/login', userCredential)
		.then((res) => {
			dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.payload });
		})
		.catch((err) => {
			dispatch({ type: types.LOGIN_FAIL, payload: err.message });
		});
};

export const addFriend = (friend) => (dispatch) => {
	dispatch({ type: types.ADD_FRIEND });
	axiosAuth()
		.post('http://localhost:5000/api/friends', friend)
		.then((res) => dispatch({ type: types.ADD_FRIEND_SUCCESS, payload: res.data }))
		.catch((err) => dispatch({ type: types.ADD_FRIEND_FAIL, payload: err.message }));
};