import React from "react";
import ProtectedUserDetails from "./protected-user-details";

const UserDetails = ({
                         user = {
                             "username": "adiotte",
                             "name": "Amare Diotte",
                             "password": "secretpassword",
                             "department": "ART",
                             "phonenumber" : "(999)999-9999",
                             "extension": "11",
                             "email": "amare@comprint.com",
                             "dateofhire": "05/15/2012",
                             "dateofbirth": "08/16/1986",
                             "fullTime": true

                         }
                     }
) => {
    let loggedin = true;
    let details;
    if (loggedin){
        details = <ProtectedUserDetails user={user}/>
    }else {
        details = ""
    }
    return(
        <div className="container bg-light mt-3 p-3 d-grid rounded">
            <h5 className="fw-bold">{user.name}</h5>
            <div className="container">
                <div>Department: {user.department}</div>
                <div>Phone: {user.phonenumber} ext. {user.extension}</div>
                <div>Email: {user.email}</div>
            </div>


            {details}
        </div>
    )
}
export default UserDetails;