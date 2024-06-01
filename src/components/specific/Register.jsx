import {useState} from 'react';
import {signupFields} from "../../constants/formField"
import Input from "../common/Input";
import FormAction from './FormAction';
import {register} from "../../services/auth/register";
import {useNavigate} from "react-router-dom";

const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

export default function Register() {
    const [signupState, setSignupState] = useState(fieldsState);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleChange = (e) => setSignupState({...signupState, [e.target.id]: e.target.value});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signupState)
        createAccount()
    }

    //handle Signup API Integration here
    const createAccount = async () => {
        console.log(signupState)
        try {
            const result = await register(signupState["username"],signupState["email-address"], signupState["password"]);
            if (result.error) {
                setErrorMessage(result.error);
            } else {
                navigate('/');
            }
        } catch (error) {
            setErrorMessage("Произошла ошибка при попытке входа в систему. Пожалуйста, попробуйте снова.");
        }
    }

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="">
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />
                    )
                }
                <FormAction handleSubmit={handleSubmit} text="Signup"/>
            </div>


        </form>
    )
}