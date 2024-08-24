import {useState} from "react";

const useForm = (initialValues) => {
    const [values, setValue] = useState(initialValues);

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setValue({
            ...values,
            [name]:value
        })
    }
    const resetValue = () => {
        setValue(initialValues);
    }
    return [values, handleChange, resetValue];
}

export default useForm;
