import React from 'react';
const NewPostDemo = ({ post }) => {
  console.log(post);
  return (
    <div className="postDemo">
      <div className="card post">
        <div className="card z-depth-0">
          <div className="card-content postContent">
            <span className="card-title postTitle">Title: {post.title}</span>
          </div>
          <div className="card-image postImage">
            <img src={post.img} alt="" />
            <span className="card-content grey-text">image</span>
          </div>
          <div className="card-content greytext text-darken-3">
            {post.video ? (
              <div className="video-container">
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.video,
                  }}></div>
              </div>
            ) : null}
            <div
              dangerouslySetInnerHTML={{
                __html: post.content,
              }}></div>
            <span className="card-title pulse louvFontColor ">
              <i className="material-icons">flash_on</i>
            </span>
            {post.tags && (
              <div className="tags">
                {post.tags.split(',').map((tag) => {
                  return <span className="tag">{tag}</span>;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewPostDemo;
