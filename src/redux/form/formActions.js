import {SET_COMPARED_DEFAULT_PASSWORD, SET_EMPTY_DATA, SET_FORM_DATA} from "./formTypes";

export const setFormData = (formData)=>{
    return{
        type: SET_FORM_DATA,
        payload: formData
    }
}

export const setComparedDefaultPassword = (defaultPassword) =>{
    return {
        type: SET_COMPARED_DEFAULT_PASSWORD,
        payload: defaultPassword
    }
}
export const setEmptyForm = () =>{
    return {
        type: SET_EMPTY_DATA,
    }
}
