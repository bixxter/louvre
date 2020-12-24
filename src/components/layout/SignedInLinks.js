import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
const SignedInLinks = (props) => {
  const { profile, auth } = props;
  const admin =
    profile.role === 'neo' ? <NavLink to="/louvre/create">Create opinion</NavLink> : null;
  if (!auth.uid) return <Redirect to="/louvre/signin" />;
  return (
    <>
      <li>{admin}</li>
      <li>
        <NavLink to="/louvre/userprofile">{profile.userName}</NavLink>
      </li>
      <li>
        <a onClick={props.signOut}>Log Out</a>
      </li>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
