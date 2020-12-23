import React from 'react';
import PostSummary from './PostSummary';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const PostsList = ({ posts }, props) => {
  const { profile } = props;
  return (
    <div className="section posts">
      {posts &&
        posts.map((post) => {
          return (
            <Link to={'/post/' + post.id} key={post.id}>
              <PostSummary post={post} profile={profile} />
            </Link>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(PostsList);
