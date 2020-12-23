import React, { Component } from 'react';
import { connect } from 'react-redux';
import { leaveComment } from '../../store/actions/postActions';

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
  };
  render() {
    const { post, postId } = this.props;
    console.log(postId);
    return (
      <div>
        <div className="input-field">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="comment">Comment</label>
            <textarea id="comment" className="materialize-textarea" onChange={this.handleChange} />
            <button type="submit" className="btn z-depth-0">
              Leave a comment
            </button>
          </form>
        </div>
        <div className="comments">
          {post.comments &&
            post.comments.map((comment) => {
              return (
                <div className="commentBlock z-depth-1">
                  <div className="commentImg">
                    <img src={comment.userImg} alt="userImg" className="circle responsive-img" />
                  </div>
                  <div className="commentContent">
                    <span className="card-title">{comment.userName}</span>
                    <p>{comment.comment}</p>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostComments);
