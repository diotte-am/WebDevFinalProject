import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as userService from "../services/user-service"

const ProfileEdit = () => {
    const {state} = useLocation();
    const dispatch = useDispatch();
    const [profileUpdate, setProfileUpdate] = useState(state.user);
    const currentUser = useSelector(state => state.isLogged)
    const canEditUsername = state.user.username === "admin" && state.user.username !== currentUser.username

    const handleName = (e) => {
        profileUpdate.name = e.target.value;
        setProfileUpdate(profileUpdate)
    }
    const handleUsername = (e) => {
        profileUpdate.username = e.target.value;
        setProfileUpdate(profileUpdate)
    }
    const handleExt = (e) => {
        profileUpdate.extension = e.target.value;
        setProfileUpdate(profileUpdate)
    }
    const handlePhone = (e) => {
        profileUpdate.phonenumber = e.target.value;
        setProfileUpdate(profileUpdate)
    }
    const handlePassword = (e) => {
        const password = e.target.value;
        profileUpdate.extension = password.trim();
        setProfileUpdate(profileUpdate)
    }
    const handleSubmit = () => {
        userService.updateUser(dispatch, profileUpdate)

    }

    const handleDelete = () => {
        userService.removeUser(dispatch, profileUpdate);
    }

    return (
        <>
            <div className="bg-black d-grid fw-bold">
                <Link to={"../profile"}>
                    <i className="fa-solid fa-arrow-left-long text-white float-start ps-3 pt-2"></i>

                    <p className="text-center text-light">
                        Comprint Order System
                    </p>
                </Link>

            </div>
            <h4 className="alert-warning text-dark fw-bold p-2">
                {state.user.name}
            </h4>

            <div className="container col-11 bg-light mt-4 d-grid rounded">
                <div className="row d-flex p-3">

                <div className=" col-6">
                    <label htmlFor="name" className="form-label mt-2">Name</label>
                    <input onChange={handleName} type="text" className="form-control" id="name"
                           placeholder={state.user.name}/>
                </div>
                    <div className=" col-4">
                        <label htmlFor="username" className="form-label mt-2"  >Username</label>
                        <input onChange={handleUsername} type="text" className="form-control" id="username"
                           placeholder={state.user.username} disabled={!canEditUsername}/>
                    </div>
                    <div className=" col-4">
                        <label htmlFor="phoneNumber" className="form-label mt-2">Phone Number</label>
                        <input onChange={handlePhone} type="text" className="form-control" id="phoneNumber"
                                placeholder={state.user.phonenumber}/>
                    </div>
                    <div className=" col-2 pb-4">
                        <label htmlFor="ext" className="form-label mt-2">Ext.</label>
                        <input onChange={handleExt} type="text" className="form-control" id="ext"
                                placeholder={state.user.extension}/>
                    </div>
                    <div className=" col-4 pb-4">
                        <label htmlFor="password" className="form-label mt-2">Password</label>
                        <input onChange={handlePassword} type="text" className="form-control" id="password"
                                placeholder="*******"/>

                    </div>

                    <hr/>

                </div>
                {state.user.department === "ADMIN" ?

                    <div className="row d-flex ps-3 pe-3">

                        <div className=" col-4">
                            <label htmlFor="dateOfHire" className="form-label mt-2">Date of Hire</label>
                            <input  type="date" className="form-control" id="dateOfHire"
                                    placeholder={state.user.dateofhire}/>
                        </div>
                        <div className=" col-4">
                            <label htmlFor="dateOfBirth" className="form-label mt-2">Date of Birth</label>
                            <input  type="date" className="form-control" id="birthDate"/>
                        </div>
                        <div className=" col-4">
                            <label htmlFor="fullTime" className="form-label mt-2">Full Time?</label>
                            <div className="form-check">
                                <input onClick={alert} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked={state.user.fullTime}/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check">
                                <input onClick={alert} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked={!state.user.fullTime} />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    No
                                </label>
                            </div>

                        </div>
                        <div className=" col-4 pb-2">
                            <label className="form-check-label" htmlFor="department">
                                Department
                            </label>
                            <select value={state.user.department} className="form-select" id="department" aria-label="department" onChange={alert}>
                                <option value="ADMINISTRATOR">Administrator</option>
                                <option value="ART" >Art Department</option>
                                <option value="PRODUCTION">Production</option>
                                <option value="WAREHOUSE">Warehouse</option>
                                <option value="SHIPPING">Shipping</option>
                            </select>

                            <br/>
                            <button onClick={handleDelete} className="btn btn-outline-danger btn-sm"> DELETE PROFILE</button>
                            <hr/>
                            <div >
                                <button type="button" className="mt-4 btn btn-warning text-dark fw-bold"> Submit </button>
                            </div>

                        </div>

                    </div> :

                    <div >
                        <button onClick={handleSubmit} type="button" className="mt-4 btn btn-warning text-dark fw-bold"> Submit </button>
                    </div>}


            </div>





        </>
)

}
export default ProfileEdit;