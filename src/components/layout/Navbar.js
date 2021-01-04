import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import Profile from './Profile';
const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  const userMobile = auth.uid ? <Profile profile={profile} /> : null;
  return (
    <nav className="nav-wrapper louvColor navBar">
      <div className="container">
        <Link to="/" className="brand-logo louvFont">
          Louvre
        </Link>
        <a href="/" data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
        <div className="hide-on-med-and-down">
          <ul className="right ">
            <li>
              <Link to="/welcome">About</Link>
            </li>
            {links}
          </ul>
        </div>
      </div>
      <ul id="slide-out" className="sidenav navBarMob">
        <li>{userMobile}</li>
        <li>
          <NavLink to="/" className="louvFont">
            Louvre
          </NavLink>
        </li>
        <li>
          <Link to="/welcome">About</Link>
        </li>
        {links}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
