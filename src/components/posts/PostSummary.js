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
            <img src={post.img} alt="post-image" />
          </div>
          <div className="card-content postContent">
            <span className="card-title postTitle">{post.title}</span>
          </div>
          <div className="card-content greytext text-darken-3">
            <span className="card-title pulse louvFontColor ">
              {post.likes}
              <i className="material-icons">flash_on</i>
            </span>
            {post.tags && (
              <div className="tags">
                {post.tags.split(',').map((tag, key) => {
                  return (
                    <span className="tag" key={key}>
                      {tag}
                    </span>
                  );
                })}
              </div>
            )}
            {moment(post.createdAt.toDate()).calendar()}
          </div>
        </div>
      </div>
    );
  }
}

export default PostSummary;
