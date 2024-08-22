import {combineReducers} from 'redux';
import defaultReducer from "./default/defaultReducer";
import productReducer from "./products/productReducer";
import formReducer from "./form/formReducer";

const rootReducer = combineReducers({
    default: defaultReducer,
    products: productReducer,
    form: formReducer
});
export default  rootReducer;
