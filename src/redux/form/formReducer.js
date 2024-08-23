import {SET_COMPARED_DEFAULT_PASSWORD, SET_FORM_DATA} from "./formTypes";

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
        default:
            return state;
    }
}
export default formReducer;
