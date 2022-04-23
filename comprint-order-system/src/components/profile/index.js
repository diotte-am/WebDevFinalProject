import React from "react";
import {Link} from "react-router-dom";
import UserDetails from "./user-details";

const Profile = () => {

    return(
        <>
            <div className="bg-black d-grid fw-bold">
                <Link to={"../"}>
                    <i className="fa-solid fa-arrow-left-long text-white float-start ps-3 pt-2"></i>

                    <p className="text-center text-light">
                        Comprint Order System
                    </p>
                </Link>

            </div>
            <h4 className="alert-warning text-dark fw-bold p-2">
                Profile
            </h4>

            <UserDetails />

        </>


    )

};
export default Profile;