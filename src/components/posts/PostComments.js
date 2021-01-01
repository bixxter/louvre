import React, { Component } from 'react';
import { connect } from 'react-redux';
import { leaveComment, deleteComment } from '../../store/actions/postActions';

class PostComments extends Component {
  state = {
    postId: this.props.postId,
    userId: this.props.auth.uid,
    userName: this.props.profile.userName,
    userImg: this.props.profile.img,
    comment: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.leaveComment(this.state);
    e.target.reset();
  };
  render() {
    const { post, auth, profile } = this.props;
    return (
      <div>
        <div className="input-field">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="comment">Comment</label>
            <textarea id="comment" className="materialize-textarea" onChange={this.handleChange} />
            <button type="submit" className="btn z-depth-0 louvColor">
              Leave a comment
            </button>
          </form>
        </div>
        <div className="comments">
          {post.comments &&
            post.comments.map((comment, i) => {
              return (
                <div className="commentBlock z-depth-1" key={i}>
                  <div className="commentImg">
                    <img src={comment.userImg} alt="userImg" className="circle responsive-img" />
                  </div>
                  <div className="commentContent">
                    <span className="card-title">{comment.userName}</span>
                    <p>{comment.comment}</p>
                  </div>
                  <div className="deleteComment">
                    {auth.uid === comment.userId || profile.role === 'neo' ? (
                      <button
                        className="btn z-depth-0 louvColor"
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.deleteComment(comment);
                        }}>
                        <i className="material-icons">clear</i>
                      </button>
                    ) : null}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    leaveComment: (comment) => dispatch(leaveComment(comment)),
    deleteComment: (comment) => dispatch(deleteComment(comment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostComments);
