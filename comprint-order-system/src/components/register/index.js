import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [registerForm, setRegisterForm] = useState({});
    const handleName = (e) => {
        registerForm.name = e.target.value;
        setRegisterForm(registerForm)
    }
    const handleUsername = (e) => {
        registerForm.username = e.target.value;
        console.log(registerForm)
        setRegisterForm(registerForm)
    }
    const handlePassword = (e) => {
        let password = e.target.value;
        registerForm.password = password.trim();
        setRegisterForm(registerForm)
    }
    const handleDepartment = (e) => {
        registerForm.department = e.target.value;
        setRegisterForm(registerForm)
    }
    const handlePhone = (e) => {
        registerForm.phonenumber = e.target.value;
        setRegisterForm(registerForm)
    }
    const handleExt = (e) => {
        registerForm.extension = e.target.value;
        setRegisterForm(registerForm)
    }
    const handleEmail = (e) => {
        registerForm.email = e.target.value;
        setRegisterForm(registerForm)
    }
    const handleDOH = (e) => {
        registerForm.dateofhire = e.target.value;
        setRegisterForm(registerForm)
    }

    const handleDOB = (e) => {
        registerForm.dateofbirth = e.target.value;
        setRegisterForm(registerForm)
    }
    const handleSubmit = () => {
        dispatch({type: "addUser", payload: registerForm})
        navigate("/login")
    }

    return (
        <>
            <div className="bg-black d-grid fw-bold">

                <Link to={"../"}>
                    <i className="fa-solid fa-arrow-left-long text-white  ps-3 pt-2"></i>


                </Link>
                <p className="text-center text-light">
                    Comprint Order System
                </p>

            </div>
            <div >

            <h4 className="alert-warning text-dark fw-bold p-2">
                Register
            </h4>

            <div className="container">

                <div className=" col-6">

                    <label htmlFor="nameRegister" className="form-label mt-2">Name</label>
                    <input onChange={handleName} type="text" className="form-control" id="nameRegister"
                            placeholder="Name"/>
                </div>

                <div className=" col-6">
                    <label htmlFor="usernameRegister" className="form-label mt-2">Username</label>
                    <input onChange={handleUsername} type="text" className="form-control" id="usernameRegister"
                            placeholder="Username"/>
                </div>

                <div className=" col-4">
                    <label htmlFor="passwordRegister" className="form-label mt-2">Password</label>
                    <input onChange={handlePassword} type="text" className="form-control" id="passwordRegister"
                            placeholder="**********"/>
                </div>

                <div className="col-2">
                    <label htmlFor="departmentRegister" className="form-label mt-2">Choose Department</label>
                    <select onChange={handleDepartment} defaultValue="tbd"  className="form-select" id="departmentRegister" aria-label="departmentRegister">
                        <option value="TBD">Choose</option>
                        <option value="ART" >Art</option>
                        <option value="ADMIN">Admin</option>
                        <option value="PRODUCTION">Production</option>
                    </select>
                </div>
                <div className="d-flex">
                    <div className=" col-4">
                        <label htmlFor="passwordRegister" className="form-label mt-2">Phone Number</label>
                        <input onChange={handlePhone} type="text" className="form-control" id="passwordRegister"
                                placeholder="Phone Number"/>
                    </div>
                    <div className="col-2 ms-3">
                        <label htmlFor="passwordRegister" className="form-label mt-2">Ext</label>
                        <input onChange={handleExt} type="text" className="form-control" id="passwordRegister"
                                placeholder="Ext"/>
                    </div>
                </div>

                <div className=" col-4">
                    <label htmlFor="emailRegister" className="form-label mt-2">Email</label>
                    <input onChange={handleEmail} type="text" className="form-control" id="emailRegister"
                            placeholder="Email"/>
                </div>

                <div className=" col-4">
                    <label htmlFor="dohRegister" className="form-label mt-2">Date of Hire</label>
                    <input onChange={handleDOH} type="date" className="form-control" id="dohRegister"
                            placeholder="dateOfHire"/>
                </div>

                <div className=" col-4">
                    <label htmlFor="dobRegister" className="form-label mt-2">Birth Date</label>
                    <input onChange={handleDOB} type="date" className="form-control" id="dobRegister"
                            placeholder="dateofbirth"/>
                </div>
                <div className="col-1 mt-4">
                    <button onClick={handleSubmit} className="btn btn-warning text-dark fw-bold">
                        Submit
                    </button>
                </div>



            </div>
            </div>

        </>
    )


}
export default Register;