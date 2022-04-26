import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const [loginForm, setLoginForm] = useState({userName: "", password: ""});
    const profiles = useSelector(state => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUsername = (e) => {
        loginForm.userName = e.target.value;
        setLoginForm(loginForm)
    }

    const handlePassword = (e) => {
        loginForm.password = e.target.value;
        setLoginForm(loginForm)
    }

    const handleSubmit = () => {
        if(loginForm.userName === "" || loginForm.password ===""){
            alert("Login failed! Please provide valid username and password")
        } else {
            const profileResult = profiles.find(profile => profile.username === loginForm.userName);
            console.log("Profile Result: " + profileResult.username)
            if(profileResult.password === loginForm.password){
                dispatch({type: "logIn", username: profileResult.username})
                navigate("/")
            }
        }
    }


    return (
        <>
            <div className="bg-black d-grid fw-bold">
                <Link to={"../"}>
                    <i className="fa-solid fa-arrow-left-long text-white float-start ps-3 pt-2"></i>

                    <p className="text-center text-light">
                        Comprint Order System
                    </p>
                </Link>

            </div>
            <h4 className="alert-light text-dark fw-bold p-2">
                Login
            </h4>
            <div className="container col-11 bg-light mt-4 d-grid rounded d-block ">

                    <div className=" col-3 pb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input onChange={handleUsername} type="text" className="form-control" id="username"
                               placeholder="Username"/>
                    </div>

                    <div className=" col-3 pb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input onChange={handlePassword} type="text" className="form-control" id="password"
                               placeholder="Password"/>
                    </div>

                <div className=" col-3 pb-3">
                   <button onClick={handleSubmit} className="float-end btn-secondary btn">
                        Submit
                    </button>
                </div>


            </div>

        </>
    )
}

export default Login;