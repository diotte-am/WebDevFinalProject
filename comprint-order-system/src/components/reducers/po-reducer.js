let POS =[  ]

const PoReducer = (state = POS, action) => {
    if (action.type === "addOrder") {
        return [action.payload, ...state];
    } else if (action.type === "deleteOrder") {
        const newOrders =  state.filter(po => po._id !== action.payload._id)
        return newOrders;
    } else if (action.type === "modifyOrder") {
       const neworders = state.map(po => po._id === action.payload.PONumber ? action.payload : po);
        console.log(neworders);
        return neworders;
    } else if (action.type === "allOrders"){
        return action.payload
    }
        else {
        return state;
    }


};
export default PoReducer;