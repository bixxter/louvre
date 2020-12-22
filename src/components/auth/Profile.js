import { connect } from 'react-redux';
import React from 'react';
import { Redirect } from 'react-router-dom';

function Profile(props) {
  const { profile, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="container">
      <div className="card hogBlock profileCard">
        <div className="card-image">
          <img src={profile.img} alt="userImg" />
        </div>
        <div className="card-content">
          <h1>{profile.userName}</h1>
          <p>e-mail: {auth.email}</p>
          <p>role: {profile.role}</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(Profile);
