const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('fail');
      return { ...state, authError: 'Login failed' };
    case 'LOGIN_SUCCESS':
      console.log('success');
      return {
        ...state,
        authError: null,
      };
    case 'SIGNOUT_SUCCESS':
      console.log('signout succes');
      return state;
    case 'SIGNUP_ERROR':
      console.log('signup fail');
      return {
        ...state,
        authError: null,
      };
    case 'SIGNUP_ERROR':
      console.log('signup fail');
      return {
        ...state,
        authError: action.err.message,
      };
    case 'EDITED_PROFILE_SUCCESS':
      console.log('edited profile', action.userName);
      return state;
    case 'EDITED_PROFILE_ERROR':
      console.log('edited profile error', action.err);
      return state;
    default:
      return state;
  }
};
export default authReducer;
