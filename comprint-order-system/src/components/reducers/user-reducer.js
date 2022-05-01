const users = [
]

const UserReducer = (state = users, action) => {
    if(action.type === "register"){
        return [action.payload, ...state];
    } else if (action.type === "updateUser"){
        return state.map(p => p._id === action.payload._id ? action.payload : p)
    } else if (action.type === "findAllUsers"){
        return action.payload;
    } else if (action.type === "removeUser"){
        return state.filter(u => u._id !== action.payload._id);
    }

    return state;

};

export default UserReducer;