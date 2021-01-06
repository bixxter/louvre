import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editPost } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom';
class EditPost extends Component {
  state = {
    id: this.props.postId,
    title: this.props.post.title,
    video: this.props.post.video,
    content: this.props.post.content,
    img: this.props.post.img,
    tags: this.props.post.tags,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editPost(this.state);
  };
  render() {
    const { profile } = this.props;
    if (profile.role !== 'neo') return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Change Post</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} value={this.state.title} />
          </div>
          <div className="input-field">
            <label htmlFor="video">Media</label>
            <textarea
              id="video"
              className="materialize-textarea"
              onChange={this.handleChange}
              value={this.state.video}
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
              value={this.state.content}
            />
          </div>
          <div className="input-field">
            <label htmlFor="img">Image</label>
            <input type="text" id="img" onChange={this.handleChange} value={this.state.img} />
          </div>
          <div className="input-field">
            <label htmlFor="tags">Tags</label>
            <input type="text" id="tags" onChange={this.handleChange} value={this.state.tags} />
          </div>
          <div className="input-field">
            <button className="btn louvColor lighten-1 z-depth-0">Change</button>
          </div>
        </form>
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
    editPost: (post) => dispatch(editPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
