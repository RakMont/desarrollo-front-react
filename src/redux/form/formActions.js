import {SET_FORM_DATA} from "./formTypes";

export const setFormData = (formData)=>{
    return{
        type: SET_FORM_DATA,
        payload: formData
    }
}
