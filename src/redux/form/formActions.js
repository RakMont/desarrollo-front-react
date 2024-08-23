import {SET_COMPARED_DEFAULT_PASSWORD, SET_FORM_DATA} from "./formTypes";

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
