import axios from "axios";

export const findAllOrders = async (dispatch) => {
    const response = await axios.get('http://localhost:4000/api/pos');
    dispatch({
        type: "allOrders",
        payload: response.data
    })
}

export const createNewOrder = async (dispatch, orderForm) => {
    const response = await axios.post('http://localhost:4000/api/create/order', orderForm);
    dispatch({
        type: "addOrder",
        payload: response.data
    })
}

export const deleteOrder = async (dispatch, orderToDelete) => {
    const pid = await axios.delete(`http://localhost:4000/api/remove/order/${orderToDelete._id}`)
    if(pid){
        dispatch({
            type: "deleteOrder",
            payload: orderToDelete
        })
    }}

export const updateOrder = async (dispatch, updatedOrder) => {
    const order = await axios.put(`http://localhost:4000/api/update/order/${updatedOrder._id}`, updatedOrder)
    dispatch({
        type: "modifyOrder",
        payload: updatedOrder
    })
}
