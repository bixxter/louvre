import React, { Component } from 'react';
import moment from 'moment';

class PostSummary extends Component {
  state = {
    id: this.props.post.id,
  };
  render() {
    const { post } = this.props;
    return (
      <div className="card z-depth-0 project-summary">
        <div className="card-content greytext text-darken-3">
          <span className="card-title">{post.title}</span>
          <p>
            posted by: {post.authorFirstName}
            {post.authorLasttName}
          </p>
          <p className="grey-text">date: {moment(post.createdAt.toDate()).calendar()}</p>
        </div>
      </div>
    );
  }
}

export default PostSummary;
