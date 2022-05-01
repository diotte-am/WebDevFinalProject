import axios from "axios";

export const findAllRates = async (dispatch) => {
    const rates = await axios.get('http://localhost:4000/api/shipping');
    if (rates){
        const {rates: rates1} = rates.data.pop();
        dispatch({
            type: "getRates",
            payload: rates1
        })
    }

}