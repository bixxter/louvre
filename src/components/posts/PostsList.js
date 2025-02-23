import React from 'react';
import PostSummary from './PostSummary';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const PostsList = ({ posts }, props) => {
  const { profile } = props;
  if (posts) {
    return (
      <div className="gallery">
        <div className="section posts container">
          {posts &&
            posts.map((post) => {
              return (
                <Link to={'/post/' + post.id} key={post.id}>
                  <PostSummary post={post} profile={profile} />
                </Link>
              );
            })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="mainLoader">
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only ">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(PostsList);
