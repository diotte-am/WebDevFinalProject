const users = [{
        "_id": "86759303",
        "username": "adiotte",
        "name": "Amare Diotte",
        "password": "secretpassword",
        "department": "ART",
        "phonenumber" : "(999)999-9999",
        "extension": "11",
        "email": "amare@comprint.com",
        "dateofhire": "05/15/2012",
        "dateofbirth": "08/16/1986",
        "fullTime": true

    },
    {
        "_id": "86759345",
        "username": "mamero",
        "name": "Mike Amero",
        "password": "secretpassword",
        "department": "ADMIN",
        "phonenumber" : "(999)999-9999",
        "extension": "15",
        "email": "mike@comprint.com",
        "dateofhire": "05/15/1992",
        "dateofbirth": "03/13/1970",
        "fullTime": true

    }
]

const UserReducer = (state = users, action) => {
    if(action.type === "addUser"){
        console.log("adduser" + JSON.stringify(action.payload))
        return [action.payload, ...state];
    }

    return state;

};

export default UserReducer;