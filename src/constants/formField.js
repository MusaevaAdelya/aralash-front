const loginFields=[
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    }
]

const companyFields = [
    {
        labelText: "Название компании",
        labelFor: "name",
        id: "name",
        name: "name",
        type: "text",
        autoComplete: "company-name",
        isRequired: true,
        placeholder: "Название компании"
    },
    {
        labelText: "Тип бизнеса",
        labelFor: "business_type",
        id: "business_type_id",
        name: "business_type",
        type: "select",
        autoComplete: "business-type",
        isRequired: true,
        placeholder: "Тип бизнеса"
    },
    {
        labelText: "Регистрационный номер",
        labelFor: "registration_number",
        id: "registration_number",
        name: "registration_number",
        type: "text",
        autoComplete: "registration-number",
        isRequired: true,
        placeholder: "Регистрационный номер"
    },
    {
        labelText: "Адрес",
        labelFor: "address",
        id: "address",
        name: "address",
        type: "text",
        autoComplete: "address",
        isRequired: true,
        placeholder: "Адрес"
    },
    {
        labelText: "Подписка",
        labelFor: "subscription",
        id: "subscription_id",
        name: "subscription",
        type: "select",
        autoComplete: "subscription",
        isRequired: false,
        placeholder: "Подписка"
    }
]

const signupFields=[
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username"   
    },
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    },
    {
        labelText:"Confirm Password",
        labelFor:"confirm-password",
        id:"confirm-password",
        name:"confirm-password",
        type:"password",
        autoComplete:"confirm-password",
        isRequired:true,
        placeholder:"Confirm Password"   
    }
]

export {loginFields,signupFields , companyFields}