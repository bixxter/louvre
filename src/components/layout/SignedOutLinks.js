import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <>
      <li>
        <NavLink to="/louvre/signup">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/louvre/signin">Login</NavLink>
      </li>
    </>
  );
};

export default SignedOutLinks;
