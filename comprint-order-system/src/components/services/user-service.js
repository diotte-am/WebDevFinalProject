import axios from "axios";

export const findAllUsers = async (dispatch) => {
    const users = await axios.get('http://localhost:4000/api/users');
    dispatch({
        type: "findAllUsers",
        payload: users.data
    })
}

export const register = async(dispatch, registerForm) => {
    const user = await axios.post('http://localhost:4000/api/register', registerForm);
    dispatch({
        type: "register",
        payload: user.data
    })
}

export const removeUser = async (dispatch, userForm) => {
    const user = await axios.delete(`http://localhost:4000/api/remove/user/${userForm._id}`);
    if(user){
        dispatch({
            type: "removeUser",
            payload: userForm
        })
    }

}

export const updateUser = async (dispatch, updatedUser) => {
    const user = await axios.put(`http://localhost:4000/api/update/user/${updatedUser._id}`, updatedUser);
        dispatch({
            type: "updateUser",
            payload: updatedUser
        })

}
