import React, { Component } from 'react';
import { connect } from 'react-redux';
import { leaveComment, deleteComment, subComment } from '../../store/actions/postActions';

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
  handleSubSubmit = (e) => {
    e.preventDefault();
    this.props.subComment(this.state);
    e.target.reset();
  };
  render() {
    const { post, auth, profile } = this.props;
    return (
      <div className="commentsSection">
        <p>
          Comments <span className="green-text">{post.comments.length}</span>
        </p>
        <div className="comments">
          {post.comments &&
            post.comments.map((comment, i) => {
              return (
                <>
                  <div className="commentBlock z-depth-0" key={i}>
                    <div className="commentImg">
                      <img src={comment.userImg} alt="userImg" className="circle responsive-img" />
                    </div>
                    <div className="commentContent">
                      <span>{comment.userName}</span>
                      <p>{comment.comment}</p>
                      <span className="commentFunc">answer </span>
                      {auth.uid === comment.userId || profile.role === 'neo' ? (
                        <span
                          className="commentFunc"
                          onClick={(e) => {
                            e.preventDefault();
                            this.props.deleteComment(comment);
                          }}>
                          delete
                        </span>
                      ) : null}
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <div className="input-field">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="comment">Comment</label>
            <textarea id="comment" className="materialize-textarea" onChange={this.handleChange} />
            <button type="submit" className="btn z-depth-0 louvColor">
              Leave a comment
            </button>
          </form>
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
    subComment: (comment) => dispatch(subComment(comment)),
    deleteComment: (comment) => dispatch(deleteComment(comment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostComments);
