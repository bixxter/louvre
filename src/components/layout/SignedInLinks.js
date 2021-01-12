import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

const SignedInLinks = (props) => {
  const { profile, auth } = props;
  const [nightMode, setNightMode] = useState(false);
  const admin = profile.role === 'neo' ? <NavLink to="/create">Create opinion</NavLink> : null;
  function darkMode() {
    var element = document.body;
    element.classList.toggle('darkMode');
  }
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <>
      <li>
        <NavLink to="/users">People</NavLink>
      </li>
      <li>{admin}</li>
      <li>
        <NavLink to="/userprofile">{profile.userName}</NavLink>
      </li>
      <li>
        <a onClick={props.signOut}>Log Out</a>
      </li>
      <li>
        <a
          className={nightMode === true ? 'btn black white-text' : 'btn white black-text'}
          onClick={(e) => {
            e.preventDefault();
            setNightMode(!nightMode);
            darkMode();
          }}>
          {nightMode === true ? 'day' : 'night'}
        </a>
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
