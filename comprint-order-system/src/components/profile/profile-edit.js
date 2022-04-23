import React from "react";
import {Link, useLocation} from "react-router-dom";

const ProfileEdit = () => {
    const {state} = useLocation();

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
                    <input  type="text" className="form-control" id="name"
                           placeholder={state.user.name}/>
                </div>
                    <div className=" col-4">
                        <label htmlFor="username" className="form-label mt-2">Username</label>
                        <input  type="text" className="form-control" id="username"
                           placeholder={state.user.username}/>
                    </div>
                    <div className=" col-4">
                        <label htmlFor="phoneNumber" className="form-label mt-2">Phone Number</label>
                        <input  type="text" className="form-control" id="phoneNumber"
                                placeholder={state.user.phonenumber}/>
                    </div>
                    <div className=" col-2 pb-4">
                        <label htmlFor="ext" className="form-label mt-2">Ext.</label>
                        <input  type="text" className="form-control" id="ext"
                                placeholder={state.user.extension}/>
                    </div>
                    <div className=" col-4 pb-4">
                        <label htmlFor="ext" className="form-label mt-2">Password</label>
                        <input  type="text" className="form-control" id="ext"
                                placeholder="*******"/>
                    </div>
                    <hr/>
<div className="text-dark alert-warning"> Fields below here will be disabled for all users except the admin</div>

                </div>
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
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={state.user.fullTime}/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Yes
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked={!state.user.fullTime}
                                />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                No
                            </label>
                    </div>

                    </div>
                        <div className=" col-4 pb-2">
                            <label className="form-check-label" htmlFor="department">
                                Department
                            </label>
                            <select defaultValue={state.user.department} className="form-select" id="department" aria-label="department">
                                <option value="ADMINISTRATOR">Administrator</option>
                                <option value="ART" >Art Department</option>
                                <option value="PRODUCTION">Production</option>
                                <option value="WAREHOUSE">Warehouse</option>
                                <option value="SHIPPING">Shipping</option>
                            </select>
                            <br/>
                            <hr/>
                            <div >
                                <button type="button" className="mt-4 btn btn-warning text-dark fw-bold"> Submit </button>
                            </div>

                        </div>

                </div>

            </div>





        </>
)

}
export default ProfileEdit;