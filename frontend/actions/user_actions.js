import { createUser, fetchUser, fetchAllUsers } from "../util/api_util";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const requestUsers = () => dispatch => {
  return fetchAllUsers().then(users => dispatch(receiveAllUsers(users)));
};

export const requestUser = id => dispatch => {
  return fetchUser(id).then(user => dispatch(receiveUser(user)));
};
export const makeUser = user => dispatch => {
  debugger;
  return createUser(user).then(user => dispatch(receiveUser(user)));
};
