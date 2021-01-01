import { connect } from 'react-redux';
import React from 'react';
import { Redirect } from 'react-router-dom';

function Profile(props) {
  const { profile, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="container">
      <div className="card hogBlock profileCard louvColor">
        <img src={profile.img} alt="userImg" className="responsive-img" />
        <div className=" profileText louvFont">
          <p className="louvFont">{profile.userName}</p>
          <p>e-mail: {auth.email}</p>
          <p>role: {profile.role === 'neo' ? 'neo' : profile.role}</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(Profile);
