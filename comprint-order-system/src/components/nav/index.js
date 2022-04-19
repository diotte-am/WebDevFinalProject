import {Link} from "react-router-dom";
import React from "react";

const Navigation = () => {
    const loggedIn = true;
    return(
        <div className="container mt-4">



            <Link to="login">
                <button type="button" className="d-block float-end btn btn-outline-dark fw-bold">
                    {loggedIn ? 'Log Out' : 'Log In' }
                </button>
            </Link>

        </div>

    )

}
export default Navigation;