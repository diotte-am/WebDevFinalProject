import React, {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import UserDetails from "./user-details";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import ProfileResults from "./profile-results";
import * as userService from "../services/user-service"
import Recents from "../home/recents";

const Profile = () => {
    const isLogged = useSelector(state => state.isLogged);
    const profiles = useSelector(state => state.users);
    const navigate = useNavigate();
    const [usernameSearch, setUsernameSearch] = useState("")
    const [profileSearch, setProfileSearch] = useState([]);
    const dispatch = useDispatch();

    const findAllUsers = () => {
        userService.findAllUsers(dispatch);
    }

    const handleLogin = () => {
        if(isLogged.loggedIn){
            return(
                alert("logout!")
            )
        } else {
            navigate("/login")
        }
    }

    const handleUsername = (e) => {
        const username = e.target.value;
        setUsernameSearch(username)

    }

    const handleSearch = () => {
        const profileResult = profiles.filter(profile => profile.username === usernameSearch);
        setProfileSearch(profileResult)
    }

    // forces redraw on change
    useEffect(() => {
        findAllUsers();
    })

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

            {isLogged.loggedIn &&
                <h4 className="alert-warning text-dark fw-bold p-2">
                Profile
                </h4>
            }
            {!isLogged.loggedIn &&
                <h4 className="alert-warning text-dark fw-bold p-2">
                    Search Profiles
                </h4>
            }

            {isLogged.loggedIn && <UserDetails user={profiles.find(p => p.username === isLogged.username)}/>}
            {!isLogged.loggedIn &&
                <button onClick={handleLogin} type="button" className="d-block float-end btn btn-outline-dark fw-bold">
                    Login
                </button>
            }

            <hr />



                <div className="container ">
                    <label htmlFor="searchProfiles" className="form-label m-2 row fw-bold">Search profiles by username:</label>
                    <input onChange={handleUsername} type="text" className="form-control "  id="searchProfiles"
                            placeholder="Enter username"/>
                    <button onClick={handleSearch} className="btn btn-warning text-dark fw-bold m-3"> Search</button>
                    <div className="container alert-light p-2">
                        <ProfileResults profile = {profileSearch} />
                    </div>



                </div>

                <Recents current={isLogged} />






        </>


    )

};
export default Profile;