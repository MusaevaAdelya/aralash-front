import {useEffect, useState} from "react";

import { companyFields } from "../constants/formField";
import {addCompany, getAllBisTipe, getSubTipe} from "../services/user/addCompany";
import {useNavigate} from "react-router-dom";

const fields=companyFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');
const AddCompanyForm = () => {

    const [companyState,setCompanyState]=useState(fieldsState);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [businessTypes, setBusinessTypes] = useState([]);
    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const businessTypesData = await getAllBisTipe();
            const subscriptionsData = await getSubTipe();

            console.log(businessTypesData)
            console.log(subscriptionsData)
            setBusinessTypes(Array.isArray(businessTypesData) ? businessTypesData : []);
            setSubscriptions(Array.isArray(subscriptionsData) ? subscriptionsData : []);
        };

        fetchData();
    }, []);
    const handleChange = (e) => {
        setCompanyState({
            ...companyState,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("e")
        try {
            const result = await addCompany(companyState);
            if (result.error) {
                console.log(result.error)
                setErrorMessage(result.error);
            } else {
                navigate('/');
            }
        } catch (error) {
            console.log(error)
            setErrorMessage("Произошла ошибка при попытке входа в систему. Пожалуйста, попробуйте снова.");
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Добавить компанию</h2>
            <form onSubmit={handleSubmit}>
                {companyFields.map((field) => (
                    <div className="mb-4" key={field.id}>
                        <label htmlFor={field.id} className="block text-gray-700 font-medium mb-2">
                            {field.labelText}
                        </label>
                        {field.type === 'select' ? (
                            field.id === 'business_type_id' ? (
                                <select
                                    id={field.id}
                                    name={field.name}
                                    value={companyState[field.id]}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required={field.isRequired}
                                >
                                    <option value="" disabled>{field.placeholder}</option>
                                    {businessTypes.map((type) => (
                                        <option key={type.id} value={type.id}>{type.name}</option>
                                    ))}
                                </select>
                            ) : (
                                <select
                                    id={field.id}
                                    name={field.name}
                                    value={companyState[field.id]}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required={field.isRequired}
                                >
                                    <option value="" disabled>{field.placeholder}</option>
                                    {subscriptions.map((sub) => (
                                        <option key={sub.id} value={sub.id}>
                                            <div className="flex flex-col">
                                                <span className="font-bold">{sub.name}</span>
                                                <span>Запросы в месяц: {sub.max_requests_per_month}</span>
                                                <span>Цена: {sub.price}</span>
                                            </div>
                                        </option>
                                    ))}
                                </select>
                            )
                        ) : (
                            <input
                                id={field.id}
                                name={field.name}
                                type={field.type}
                                autoComplete={field.autoComplete}
                                required={field.isRequired}
                                placeholder={field.placeholder}
                                value={companyState[field.id]}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        )}
                    </div>
                ))}
                <div className="text-right">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Добавить
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCompanyForm;