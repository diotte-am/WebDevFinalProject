import React from "react";

const ProfileResults = ({profile}) => {
    return (
        <>
            {profile.map(p => {
                return(
                    <>
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


                    </>

                )

            })}
        </>
        )
    }
export default ProfileResults;