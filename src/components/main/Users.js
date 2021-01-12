import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { deleteUser } from '../../store/actions/postActions';
const Users = (props) => {
  const { users, profile, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (users) {
    return (
      <div className="container">
        <div className="usersList">
          {users &&
            Object.keys(users).map((user, i) => {
              return (
                <div className="card user louvColor">
                  {profile.role === 'neo' && user !== auth.uid ? (
                    <button
                      className="btn z-depth-0 louvColor"
                      onClick={(e) => {
                        e.preventDefault();
                        props.deleteUser(user);
                        props.history.push('/users');
                      }}>
                      <i className="material-icons">clear</i>
                    </button>
                  ) : null}
                  <img
                    src={users[user] && users[user].img}
                    alt="userImg"
                    className="responsive-img"
                  />
                  <div className="userText louvFont">
                    <p className="louvFont">{users[user] && users[user].userName}</p>
                  </div>
                  {user === auth.uid ? <i className="material-icons center">account_box</i> : null}
                </div>
              );
            })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="mainLoader">
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only ">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    users: state.firestore.data.users,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (user) => dispatch(deleteUser(user)),
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'users' }]),
)(Users);
