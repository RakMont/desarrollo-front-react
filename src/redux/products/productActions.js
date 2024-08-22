import {SET_PRODUCTS} from "./productTypes";
export const setProductsList = (products) =>{
    return {
        type: SET_PRODUCTS,
        payload: products,
    }
}
