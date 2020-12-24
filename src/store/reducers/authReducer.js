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
      console.log('signup success');
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
    default:
      return state;
  }
};
export default authReducer;
