import {useDispatch, useSelector} from "react-redux";
import useForm from "../../hooks/useForm";
import {setFormData} from "../../redux/form/formActions";

const LoginForm = () => {
    const dispatch = useDispatch();

    const [values, handleChange] = useForm({username:'', email:''})
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(values)
        dispatch(setFormData(values))
    }

    const form = useSelector(state => state.form);

    return (
    <div>
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
