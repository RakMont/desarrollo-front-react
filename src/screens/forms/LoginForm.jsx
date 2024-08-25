import {useDispatch, useSelector} from "react-redux";
import useForm from "../../hooks/useForm";
import {setEmptyForm, setFormData} from "../../redux/form/formActions";
import {useState} from "react";
import { motion } from "framer-motion"
import Modal from "../../components/Modal";
import {Link} from "react-router-dom";

const LoginForm = () => {
    const dispatch = useDispatch();
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [values, handleChange, resetValue] = useForm({username:'', email:'', password:''})
    const [modalMessage, setModalMessage] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const [modalType, setModalType] = useState('information');
    const [modalClass, setModalClass] = useState('success');
    const [logged, setLogged] = useState(false);
    const comparedDefaultPassword = useSelector(state => state.form.comparedDefaultPassword)
    const form = useSelector(state => state.form);

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log( "values" + values, "compared"+comparedDefaultPassword)
        setModalType('information');
        if(values.password === comparedDefaultPassword){
            setModalClass('success');
            setModalMessage('Logueado exitosamente');
            setLogged(true);
            dispatch(setFormData(values))
        } else{
            setModalClass('error');
            setModalMessage('Password incorrecto');
        }
        setShowModalInfo(true);
    }

    const handlePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility);
    }

    const handleCloseModal = (data) => {
        setShowModalInfo(false);
        if(data === 'confirmationSucceed'){
            dispatch(setEmptyForm());
            resetValue();
            setLogged(false);
        }
    }

    const handleLogout = () =>{
        setModalType('confirmation');
        setModalClass('question');
        setModalMessage({
            modalQuestion : '¿Estás seguro de que quieres cerrar sesión?',
            confirmationButton: 'Presionar Para salir!!!'
        })
        setShowModalInfo(true);
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <Modal
                    visible={showModalInfo}
                    modalClass={modalClass}
                    modalType={modalType}
                    message={modalMessage}
                    onClose={handleCloseModal}
                />
                <div className="form-div">
                    <h2>Login Form</h2>
                    <h4>username: {form.formData.username}</h4>

                    <div>
                        <label htmlFor="username">Username: </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input
                            type={passwordVisibility ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <button onClick={handlePasswordVisibility}>{passwordVisibility ? 'Hide' : 'Show'}</button>
                    </div>

                        <div className="button-container">
                            {logged ?
                                <Link className="logout-link" onClick={handleLogout}>Logout</Link> :
                                <button onClick={handleSubmit} >Submit</button>
                            }
                        </div>


                </div>
            </div>
        </motion.div>
    );
}
export default LoginForm;
