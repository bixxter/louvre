export const createPost = (post) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection('posts')
      .add({
        ...post,
        authorUserName: profile.userName,
        authorId: authorId,
        createdAt: new Date(),
        likes: 0,
        comments: [],
      })
      .then(() => {
        dispatch({ type: 'CREATE_POST_SUCCESS', post });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_POST_ERROR', err });
      });
  };
};

export const likePost = (postToLike) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    firestore
      .collection('posts')
      .doc(postToLike)
      .update({
        likes: firebase.firestore.FieldValue.increment(1),
      })
      .then(() => {
        dispatch({ type: 'LIKE_SUCCESS', postToLike });
      })
      .catch((err) => {
        dispatch({ type: 'LIKE_ERROR', err });
      });
  };
};
export const leaveComment = (comment) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    console.log(comment);
    firestore
      .collection('posts')
      .doc(comment.postId)
      .update({
        comments: firebase.firestore.FieldValue.arrayUnion(comment),
      })
      .then(() => {
        dispatch({ type: 'COMMENT_SUCCESS', comment });
      })
      .catch((err) => {
        dispatch({ type: 'COMMENT_ERROR', err });
      });
  };
};
export const deleteComment = (comment) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    console.log(comment);
    firestore
      .collection('posts')
      .doc(comment.postId)
      .update({
        comments: firebase.firestore.FieldValue.arrayRemove(comment),
      })
      .then(() => {
        dispatch({ type: 'DELETE_COMMENT_SUCCESS', comment });
      })
      .catch((err) => {
        dispatch({ type: 'DELETE_COMMENT_ERROR', err });
      });
  };
};
export const deletePost = (post) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    firestore
      .collection('posts')
      .doc(post)
      .delete()
      .then(() => {
        dispatch({ type: 'DELETE_POST_SUCCESS', post });
      })
      .catch((err) => {
        dispatch({ type: 'DELETE_POST_ERROR', err });
      });
  };
};

export const editPost = (post) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection('posts')
      .doc(post.id)
      .update({
        title: post.title,
        video: post.video,
        content: post.content,
        img: post.img,
      })
      .then(() => {
        dispatch({ type: 'EDITED_POST_SUCCESS', post });
      })
      .catch((err) => {
        dispatch({ type: 'EDITED_POST_ERROR', err });
      });
  };
};
