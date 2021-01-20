import React, { Component } from 'react';
import { connect } from 'react-redux';
import { leaveComment, deleteComment, subComment } from '../../store/actions/postActions';
import { Link } from 'react-router-dom';

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
    const commentHandle = (
      <div className="input-field">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="comment">Comment</label>
          <textarea id="comment" className="materialize-textarea" onChange={this.handleChange} />
          <button type="submit" className="btn z-depth-0 louvColor">
            Leave a comment
          </button>
        </form>
      </div>
    );
    return (
      <div className="commentsSection">
        <p>
          Comments <span className="green-text">{post.comments.length}</span>
        </p>
        <div className="comments">
          {post.comments &&
            post.comments.map((comment, i) => {
              return (
                <div key={i}>
                  <div className="commentBlock z-depth-0">
                    <div className="commentImg">
                      <img src={comment.userImg} alt="userImg" />
                    </div>
                    <div className="commentContent">
                      <span className="green-text">{comment.userName}</span>
                      <p>{comment.comment}</p>
                      {/* {auth.uid ? <span className="commentFunc green-text">answer </span> : null} */}
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
                </div>
              );
            })}
        </div>

        {auth.uid ? (
          commentHandle
        ) : (
          <p className="center red-text">
            <Link to="/signup">Зарегистрируйтесь</Link> или <Link to="/signin">войдите</Link>, чтобы
            оставить комментарий. <br />
          </p>
        )}
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
