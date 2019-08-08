import { connect } from "react-redux";
import React from "react";
import { createNewUser } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

//import Signup from "./signup";
import Login from "./login_form";

const msp = ({ errors }) => {
  console.log("ErrorsEtc", errors.session);
  return {
    errors: errors.session,
    formType: "signup"
  };
};

const mdp = dispatch => {
  return {
    processForm: formUser => dispatch(createNewUser(formUser)),
    otherForm: (
      <button onClick={() => dispatch(openModal("login"))}>Login</button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  msp,
  mdp
)(Login);
