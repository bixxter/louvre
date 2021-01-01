import { connect } from 'react-redux';
import React from 'react';
import { Redirect } from 'react-router-dom';

function Profile(props) {
  const { profile, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="container">
      <div className="card hogBlock profileCard louvColor">
        <div className="card-image">
          <img src={profile.img} alt="userImg" className="responsive-img" />
        </div>
        <div className="card-content louvFont">
          <h1 className="louvFont">{profile.userName}</h1>
          <h5>e-mail: {auth.email}</h5>
          <h5>role: {profile.role === 'neo' ? 'neo' : profile.role}</h5>
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
