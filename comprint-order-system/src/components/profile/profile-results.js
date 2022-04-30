import React from "react";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const ProfileResults = ({profile}) => {
    const navigate = useNavigate();
    const handleEdit = (user) => {
        navigate("/profile/edit", {state: {user}})
    }
    return (
        <>
            {profile.map(p => {
                return(
                    <div className="p-3 m-2">
                        <div>
                            <Button className="float-end" onClick={() => handleEdit(p)}>
                                EDIT
                            </Button>
                        </div>
                        Name: {p.name}
                        <br/>
                        Department: {p.department}
                        <br/>
                        Username: {p.username}
                        <br/>
                        Phone: {p.phonenumber}, ext.  {p.extension}
                        <br/>
                        Email: {p.email}
                        <br/>
                        Date of Hire: {p.dateofhire}
                        <br/>



                    </div>

                )

            })}
        </>
        )
    }
export default ProfileResults;