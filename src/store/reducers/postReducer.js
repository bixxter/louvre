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
      console.log('created post');
      return state;
    case 'CREATE_POST_ERROR':
      console.log('create post error', action.err);
      return state;
    case 'EDITED_POST_SUCCESS':
      console.log('edited post');
      return state;
    case 'EDITED_POST_ERROR':
      console.log('edited post error', action.err);
      return state;
    case 'DELETE_POST_SUCCESS':
      console.log('post delete success post');
      return state;
    case 'DELETE_POST_ERROR':
      console.log('post delete error', action.err);
      return state;
    case 'LIKE_SUCCESS':
      console.log('liked post');
      return state;
    case 'LIKE_ERROR':
      console.log('like error', action.err);
      return state;
    case 'COMMENT_SUCCESS':
      console.log('commented post');
      return state;
    case 'COMMENT_ERROR':
      console.log('commented error', action.err);
      return state;
    case 'DELETE_COMMENT_SUCCESS':
      console.log('deleted post comment');
      return state;
    case 'DELETE_COMMENT_ERROR':
      console.log('deleted post comment error', action.err);
      return state;
    case 'DELETE_USER_SUCCESS':
      console.log('deleted user');
      return state;
    case 'DELETE_USER_ERROR':
      console.log('deleted user error', action.err);
      return state;
    default:
      return state;
  }
};
export default postReducer;
