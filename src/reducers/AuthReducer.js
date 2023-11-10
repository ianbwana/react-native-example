const AuthReducer = (state, action) => {
    switch (action.type) {
    case 'ATTEMPT_LOGIN':
        return { isAuthenticated: false, user: null };
    case 'LOGIN_SUCCESS':
        return {
            user: action.user,
            isAuthenticated: true,
        };
    case 'LOGIN_ERROR':
        return {
            isAuthenticated: false,
            user: null,
        };
    case 'LOGOUT':
        return {
            isAuthenticated: false,
            user: null,
        };
    default:
        return state;
    }
};

export default AuthReducer;
