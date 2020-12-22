import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

class PostDetails extends Component {
  render() {
    const { post, auth } = this.props;
    if (!auth.uid) return <Redirect to="signin" />;

    if (post) {
      return (
        <div className="container section project-deatils">
          <div className="card z-depth-0">
            <div className="card-image">
              <img src={post.img} alt="" />
            </div>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.content}</p>

              <div className="card-action grey lighten-4 grey-text">
                <div>
                  Posted by: {post.authorFirstName}
                  {post.authorLastName}
                </div>
                <div>{moment(post.createdAt.toDate()).calendar()}</div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container center">
          <p>Loading post</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return {
    post: post,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    users: state.firestore.data.users,
    postId: id,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'posts' }, { collection: 'users' }]),
)(PostDetails);
