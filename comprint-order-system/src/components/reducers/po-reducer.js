const POS =[ {"status":"PROOFED",
    "PONumber":"12345",
    "client":"Dana L",
    "dueDate":"2022-04-26",
    "quantity":"500",
    "address":"154 Walnut St",
    "state":"MA",
    "zip":"02145",
    "_id": 1650923285340,
    "addedBy": "mamero",
    "updateDate" : "2022-04-25",
    "updatedBy" : "mamero",
    "location":[
        {"location":"Full Front","flashes":"1","colors":"1"},
        {"location":"Full Back","flashes":"2","colors":"2"}
    ],
    "dateAdded":"2022-3-24"} ]

const PoReducer = (state = POS, action) => {
    if (action.type === "addOrder") {
        return [action.payload, ...state]
    } else if (action.type === "deleteOrder") {
        return state.filter(po => po._id !== action.payload)
    } else if (action.type === "modifyOrder") {
       return state.map(po =>
       {
           if(po._id === action.payload._id){
               po.dueDate = action.payload.dueDate
               po.client = action.payload.client
               po.quantity = action.payload.quantity
               po.updateDate = new Date().toString()
               po.updatedBy = action.logged.username
           }
           return po;
       })
    } else if (action.type === "allOrders"){
        return action.payload
    }

        else {
        return state;
    }


};
export default PoReducer;