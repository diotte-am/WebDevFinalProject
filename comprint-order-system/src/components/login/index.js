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
        loginForm.username = e.target.value;
        setLoginForm(loginForm)
    }

    const handlePassword = (e) => {
        loginForm.password = e.target.value.trim();
        setLoginForm(loginForm)
    }

    const handleSubmit = () => {
        if(loginForm.username === "" || loginForm.password ===""){
            alert("Login failed! Please provide valid username and password")
        } else {
            profiles.map(p => {
                console.log(p.username)
            })
            const profileResult = profiles.find(profile => profile.username === loginForm.username);
            if(profileResult === undefined){
                alert("This username does not exist!")
            }else{
                if(profileResult.password === loginForm.password){
                    dispatch({type: "logIn", username: profileResult.username})
                    navigate("/")
                } else {
                    alert(JSON.stringify(profileResult.password))
                }
            }
        }
    }

    const handleRegister = () => {
        navigate("/register")
    }


    return (
        <>
            {JSON.stringify(profiles)}
            <div className="bg-black d-grid fw-bold">
                <Link to={"../"}>
                    <i className="fa-solid fa-arrow-left-long text-white float-start ps-3 pt-2"></i>

                    <p className="text-center text-light">
                        Comprint Order System
                    </p>
                </Link>

            </div>
            <h4 className="alert-warning text-dark fw-bold p-2">
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

                <div className=" col-3 pb-3 ">
                    <div className="m-2">
                        <button onClick={handleSubmit} className="float-end btn-warning btn m-1 text-dark fw-bold">
                            Submit
                        </button>
                    </div>

                    <div className="m-2">
                        <button onClick={handleRegister} className="float-end btn-warning btn m-1 text-dark fw-bold">
                            Register
                        </button>
                    </div>



               </div>
            </div>
        </>
    )
}

export default Login;