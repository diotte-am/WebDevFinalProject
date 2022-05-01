let POS =[  ]

const PoReducer = (state = POS, action) => {
    if (action.type === "addOrder") {
        return [action.payload, ...state]
    } else if (action.type === "deleteOrder") {
        return state.filter(po => po._id.toString() !== action.payload._id.toString())
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