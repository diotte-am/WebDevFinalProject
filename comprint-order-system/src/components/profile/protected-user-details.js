import React from "react";

const ProtectedUserDetails = ({user}) => {
    return (
        <>
            <div className="container">
                <br/>
                <div>Date of Hire: {user.dateofhire}</div>
                <div>Date of Birth: {user.dateofbirth}</div>
                <div>Full Time: {user.fullTime ? "Y" : "N"}</div>
            </div>
        </>

    )
}
export default ProtectedUserDetails;