import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom';
class CreatePost extends Component {
  state = {
    title: '',
    content: '',
    img: '',
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
  render() {
    const { auth, profile } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    if (profile.role !== 'neo') return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create new opinion</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
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
            <button className="btn pink lighten-1 z-depth-0">Create</button>
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
