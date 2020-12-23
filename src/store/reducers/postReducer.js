const initState = {
  post: [
    { id: 1, title: 'lol kek', content: 'cheburek rek rek erk' },
    { id: 2, title: 'lol kek', content: 'cheburek rek rek erk' },
    { id: 3, title: 'lol kek', content: 'cheburek rek rek erk' },
  ],
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_POST_SUCCESS':
      console.log('created post', action.post);
      return state;
    case 'CREATE_POST_ERROR':
      console.log('create post error', action.err);
      return state;
    case 'LIKE_SUCCESS':
      console.log('liked post', action.postToLike);
      return state;
    case 'LIKE_ERROR':
      console.log('like error', action.err);
    case 'COMMENT_SUCCESS':
      console.log('liked post', action.comment);
      return state;
    case 'COMMENT_ERROR':
      console.log('like error', action.err);
      return state;
    default:
      return state;
  }
};
export default postReducer;
