const rates = [
]

const ShippingReducer = (state = rates, action) => {
    if(action.type === "getRates"){
        return action.payload
    } else {
        return state;
    }

}
export default ShippingReducer;
