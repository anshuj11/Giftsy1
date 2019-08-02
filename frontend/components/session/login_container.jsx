import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import Login from "./login";
import { withRouter } from "react-router-dom";

const mapStateToProps = ({ errors }) => {

  return {
    errors: errors.session,
    formType: "login"
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: formUser => dispatch(login(formUser)),
  otherForm: (
    <button onClick={() => dispatch(openModal("signup"))}>Signup</button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
