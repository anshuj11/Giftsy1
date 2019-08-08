import { postUser, deleteSession, postSession } from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = user => {
  //debugger;

  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveErrors = errors => {
  console.dir(errors);
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

// const user = {
//   id: 1,
//   username: "",
//   email: ""
// }

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const createNewUser = formUser => dispatch => {
  debugger;
  return postUser(formUser).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const login = formUser => dispatch => {
  //debugger;
  return postSession(formUser).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const logout = () => dispatch => {
  return deleteSession().then(() => dispatch(logoutCurrentUser()));
};
