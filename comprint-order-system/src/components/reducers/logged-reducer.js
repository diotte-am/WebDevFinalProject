const user =
    {loggedIn: true,
        username: "adiotte"}


const LoggedReducer = (state = user
    , action) => {
    if(action.type === "logOut"){
        state.loggedIn = false;
        return state;
    }else if(action.type === "logIn"){
        state.loggedIn = true;
        return state;
    }
            return state;
};

export default LoggedReducer;