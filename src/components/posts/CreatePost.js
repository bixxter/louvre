import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom';
import NewPostDemo from './NewPostDemo';
class CreatePost extends Component {
  state = {
    title: '',
    video: '',
    content: '',
    img: '',
    tags: '',
    demo: false,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPost(this.state);
    this.props.history.push('/');
  };
  handleDemoClick = (e) => {
    e.preventDefault();
    this.setState({
      demo: !this.state.demo,
    });
  };
  render() {
    const { auth, profile } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    if (profile.role !== 'neo') return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <button className="btn louvColor" onClick={this.handleDemoClick}>
            {this.state.demo === false ? 'Demo' : 'Close'}
          </button>

          {this.state.demo === true ? <NewPostDemo post={this.state} /> : null}
          <h5 className="grey-text text-darken-3">Create new opinion</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="video">Media</label>
            <textarea id="video" className="materialize-textarea" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="img">Image</label>
            <input type="text" id="img" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="tags">Tags</label>
            <input type="text" id="tags" onChange={this.handleChange} />
            {this.state.tags.length === 0 ? null : (
              <span className="green-text">
                *please use "," to devide tags <br /> example: video, audio, lol{' '}
              </span>
            )}
          </div>
          <div className="input-field">
            <button className="btn louvColor lighten-1 z-depth-0">Create</button>
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
    createPost: (post) => dispatch(createPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
