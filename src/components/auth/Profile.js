import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { editProfileName, editProfileImg } from '../../store/actions/authActions';

function Profile(props) {
  const { profile, auth } = props;
  const [userName, setUserName] = useState(profile.userName);
  const [img, setImg] = useState(profile.img);
  const [editMode, setEditMode] = useState(false);
  const editButton = (
    <>
      <button
        className="btn z-depth-0"
        onClick={(e) => {
          e.preventDefault();
          setEditMode(!editMode);
        }}>
        {editMode === false ? (
          <i className="material-icons">edit</i>
        ) : (
          <i className="material-icons">close</i>
        )}
      </button>
    </>
  );
  const profileImg = editMode === false ? profile.img : img;
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="container">
      <div className="card profileCard louvColor">
        <img src={profileImg} alt="userImg" className="responsive-img" />
        <div className="profileText louvFont">
          {editMode === false ? (
            <>
              <p className="louvFont">{profile.userName}</p>
            </>
          ) : (
            <>
              <p className="louvFont">{userName}</p>
              <div className="input-field">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => {
                    e.preventDefault();
                    setUserName(e.target.value);
                  }}
                />
              </div>
              <p className="louvFont">Change your image:</p>
              <div className="input-field">
                <input
                  type="text"
                  value={img}
                  onChange={(e) => {
                    e.preventDefault();
                    setImg(e.target.value);
                  }}
                />
              </div>
            </>
          )}
          <p>e-mail: {auth.email}</p>
          <p>role: {profile.role === 'neo' ? 'neo' : profile.role}</p>
          {editMode === false ? null : (
            <button
              className="btn z-depth-0"
              onClick={(e) => {
                e.preventDefault();
                props.editProfileName(userName);
                props.editProfileImg(img);
                setEditMode(false);
              }}>
              <i className="material-icons">check</i>
            </button>
          )}
          {editButton}
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
const mapDispatchToProps = (dispatch) => {
  return {
    editProfileName: (newUserName) => dispatch(editProfileName(newUserName)),
    editProfileImg: (newUserImg) => dispatch(editProfileImg(newUserImg)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
