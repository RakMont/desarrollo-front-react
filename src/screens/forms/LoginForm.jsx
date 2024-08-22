import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setProductsList} from "../../redux/products/productActions";
import useForm from "../../hooks/useForm";
import {setFormData} from "../../redux/form/formActions";

const LoginForm = () => {
    const productsState = useSelector(
        (state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            setProductsList([
                {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
                {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
                {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
                {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
                {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
                {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
            ])
        );
    }, []);

    const [values, handleChange] = useForm({username:'', email:''})
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(values)
        dispatch(setFormData(values))
    }

    const form = useSelector(state => state.form);

    return (
    <div>
        Login form
        {JSON.stringify(productsState.products)}
        <form onSubmit={handleSubmit}>
            <h4>username: {form.formData.username}</h4>
            <h4>email: {form.formData.email}</h4>
            <div>
                <label htmlFor="username">username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  );
}
export default LoginForm;
