import {useDispatch, useSelector} from "react-redux";
import useForm from "../../hooks/useForm";
import {setFormData} from "../../redux/form/formActions";
import { motion } from "framer-motion"
import ModalInfo from "../../components/ModalInfo";
import {useState} from "react";

const LoginForm = () => {
    const dispatch = useDispatch();
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [values, handleChange] = useForm({username:'', email:'', password:''})
    const [modalMessage, setModalMessage] = useState('');
    const comparedDefaultPassword = useSelector(state => state.form.comparedDefaultPassword)
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(values)
        if(values.password === comparedDefaultPassword){
            setModalMessage("Logueado exitosamente")
            dispatch(setFormData(values))
        } else{
            setModalMessage("Password incorrecto")
        }
        setShowModalInfo(true);
    }

    const form = useSelector(state => state.form);

    const hideModalInfo = () => {
        setShowModalInfo(false);
    }
    const showButton = () =>{
        setShowModalInfo(true);
    }
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <ModalInfo
                    visible={showModalInfo}
                    message={modalMessage}
                    onClose={hideModalInfo}
                />
                <form onSubmit={handleSubmit}>
                    <h4>username: {form.formData.username}</h4>
                    <h4>email: {form.formData.email}</h4>
                    <h4>password: {form.formData.password}</h4>

                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="button-container">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
}
export default LoginForm;
