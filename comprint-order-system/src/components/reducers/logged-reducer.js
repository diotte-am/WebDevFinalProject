const user =
    {loggedIn: false,
        username: ""}


const LoggedReducer = (state = user
    , action) => {
    if(action.type === "logOut"){
        state.loggedIn = false;
        return state;
    }else if(action.type === "logIn"){
        state.loggedIn = true;
        state.username = action.username;
        return state;
    }
            return state;
};

export default LoggedReducer;