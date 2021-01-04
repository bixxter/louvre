import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import { likePost, deletePost } from '../../store/actions/postActions';
import PostComments from './PostComments';
import EditPost from './EditPost';

class PostDetails extends Component {
  state = {
    editMode: false,
  };
  render() {
    const { post, auth, postId, profile } = this.props;
    const editor = <EditPost post={post} postId={postId} />;
    if (!auth.uid) return <Redirect to="/signin" />;
    if (post) {
      return (
        <div className="container section postDetail">
          <div className="card z-depth-0">
            <div className="card-content">
              <div className="editMode right">
                {profile.role === 'neo' ? (
                  <button
                    className="btn louvColor"
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({
                        editMode: !this.state.editMode,
                      });
                    }}>
                    {this.state.editMode === false ? (
                      <i className="material-icons">edit</i>
                    ) : (
                      <i className="material-icons">cancel</i>
                    )}
                  </button>
                ) : null}
              </div>
              {this.state.editMode === true ? editor : null}
              <div className="postTitle">
                <span className="card-title">{post.title}</span>
                <button
                  className="btn z-depth-0 grey"
                  onClick={(e) => {
                    this.props.history.push('/');
                  }}>
                  <i className="material-icons">chevron_left</i>
                </button>
                {profile.role === 'neo' ? (
                  <div className="edit right">
                    <div className="delPost">
                      <button
                        className="btn z-depth-0 red"
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.deletePost(postId);
                          this.props.history.push('/');
                        }}>
                        <i className="material-icons">clear</i>
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
              {post.video ? (
                <div className="video-container">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.video,
                    }}></div>
                </div>
              ) : null}
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content,
                }}></div>
              <div className="like">
                <button
                  className="btn black pulse"
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.likePost(postId);
                  }}>
                  <i className="material-icons white-text">flash_on</i>
                  {post.likes}
                </button>
              </div>
              <div className="card-action grey lighten-4 grey-text">
                <div>Posted by: {post.authorUserName}</div>
                <div>{moment(post.createdAt.toDate()).calendar()}</div>
              </div>
              <div className="comments">
                <PostComments post={post} postId={postId} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class="progress">
          <div class="indeterminate"></div>
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
const mapDispatchToProps = (dispatch) => {
  return {
    likePost: (postToLike) => dispatch(likePost(postToLike)),
    deletePost: (post) => dispatch(deletePost(post)),
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'posts' }, { collection: 'users' }]),
)(PostDetails);
