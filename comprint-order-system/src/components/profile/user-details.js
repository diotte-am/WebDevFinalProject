import React from "react";
import ProtectedUserDetails from "./protected-user-details";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";


const UserDetails = ({user}
) => {
    const navigate = useNavigate()
    const loggedIn = useSelector(state => state.isLogged)
    let details;
    if (loggedIn){
        details = <ProtectedUserDetails user={user}/>
    }else {
        details = ""
    }

    const handleEdit = () => {
        if(loggedIn){
            navigate("/profile/edit", {state: {user}})
        } else {
            navigate("/login")
        }


    }
    return(
        <div className="container bg-light mt-3 p-3 d-grid rounded">
            {console.log(user)}
            <h5 className="fw-bold">{user.name}</h5>
            <div className="container">

                    <button onClick={handleEdit} type="button" className="float-end btn btn-warning text-dark fw-bold">
                        {loggedIn ? 'Edit' : 'Log In' }
                    </button>

                <div>Department: {user.department}</div>
                <div>Phone: {user.phonenumber} ext. {user.extension}</div>
                <div>Email: {user.email}</div>
            </div>


            {details}
        </div>
    )
}
export default UserDetails;