import {SET_COMPARED_DEFAULT_PASSWORD, SET_EMPTY_DATA, SET_FORM_DATA} from "./formTypes";

const initialState = {
    formData:{
        username:'',
        email:'',
        password:'',
    },
    comparedDefaultPassword: 'mod7ReactUSIP'
}

const formReducer = (state = initialState, action) =>{
    switch (action.type){
        case SET_FORM_DATA : {
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload
                },
            }
        }
        case SET_COMPARED_DEFAULT_PASSWORD:{
            return {
                comparedDefaultPassword: action.payload
            }
        }
        case SET_EMPTY_DATA :{
            return {
                ...state,
                formData: {initialState}
            }
        }
        default:
            return state;
    }
}
export default formReducer;
