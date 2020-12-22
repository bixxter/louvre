import React, { Component } from 'react';
import PostsList from '../posts/PostsList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
class Dashboard extends Component {
  render() {
    const { posts, auth } = this.props;
    if (!auth.uid) return <Redirect to="signin" />;
    return (
      <div>
        <div className="dashboard container">
          <div className="col s12 m6">
            <PostsList posts={posts} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'posts' }]),
)(Dashboard);
