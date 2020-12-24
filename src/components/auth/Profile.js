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
        <div className="card-content">
          <h1>{profile.userName}</h1>
          <p>e-mail: {auth.email}</p>
          <p>role: {profile.role === 'neo' ? <h5 className="green-text">neo</h5> : profile.role}</p>
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
