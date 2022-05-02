const user =
    {loggedIn: false,
        username: "",
    department: ""}


const LoggedReducer = (state = user
    , action) => {
    if(action.type === "logOut"){
        state.loggedIn = false;
        state.username = "";
        state.department = "";
        return state;
    }else if(action.type === "logIn"){
        state.loggedIn = true;
        state.username = action.username;
        state.department = action.department;
        return state;
    }
            return state;
};

export default LoggedReducer;