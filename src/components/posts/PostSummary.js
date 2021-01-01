import React, { Component } from 'react';
import moment from 'moment';

class PostSummary extends Component {
  state = {
    id: this.props.post.id,
  };
  render() {
    const { post } = this.props;
    return (
      <div className="post">
        <div className="card z-depth-0">
          <div className="card-image postImage">
            <img src={post.img} alt="" />
          </div>
          <div className="card-content postContent">
            <span className="card-title postTitle">{post.title}</span>
          </div>
          {/* <div className="card-content greytext text-darken-3">
            {moment(post.createdAt.toDate()).calendar()}
          </div> */}
        </div>
      </div>
    );
  }
}

export default PostSummary;
