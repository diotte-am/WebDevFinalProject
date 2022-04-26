const POS =[ {"status":"RECEIVED",
    "PONumber":"12345",
    "client":"Dana L",
    "dueDate":"2022-04-26",
    "quantity":"500",
    "address":"154 Walnut St",
    "state":"MA",
    "zip":"02145",
    "_id": 1650923285340,
    "location":[
        {"location":"Full Front","flashes":"1","colors":"1"},
        {"location":"Full Back","flashes":"2","colors":"2"}
    ],
    "dateAdded":"2022-3-24"} ]

const PoReducer = (state = POS, action) => {
    if (action.type === "addOrder") {
        return [action.payload.orderForm, ...state]
    } else if (action.type === "deleteOrder") {
        return state.filter(po => po._id !== action.payload)
    } else {
        return state;
    }


};
export default PoReducer;