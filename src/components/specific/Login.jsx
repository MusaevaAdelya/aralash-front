import { useState } from 'react';
import { loginFields } from "../../constants/formField";
import Input from "../common/Input";
import FormExtra from './FormExtra';
import FormAction from './FormAction';
import { useNavigate} from "react-router-dom";
import {login} from "../../services/auth/login";
const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const [loginState,setLoginState]=useState(fieldsState);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();


    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = async () =>{


        console.log(loginState["email-address"], loginState["password"])
        try {
            const result = await login(loginState["email-address"], loginState["password"]);
            if (result.error) {
                setErrorMessage(result.error);
            } else {

                console.log(result)
                localStorage.setItem('accessToken', result.access);
                localStorage.setItem('refreshToken', result.refresh);
                navigate('/');
            }
        } catch (error) {
            setErrorMessage("Произошла ошибка при попытке входа в систему. Пожалуйста, попробуйте снова.");
        }
         }
    

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
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
        </div>

        <FormExtra/>
        <FormAction handleSubmit={handleSubmit} text="Login"/>

      </form>
    )
}