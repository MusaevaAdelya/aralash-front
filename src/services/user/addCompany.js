import API from "../../api";

export const getAllBisTipe = async () => {
    try {
        const response = await API.get('user/business-types/', );

        return response.data.results;
    } catch (error) {
        // Проверка наличия ошибки и её типа
        if (error.response && error.response.status === 401) {
            // Неправильный логин или пароль
            return {error: "Неправильный"};
        } else {
            // Другие виды ошибок
            return {error: "Произошла ошибка "};
        }
    }
};


export const getSubTipe = async () => {
    try {
        const response = await API.get('subscriptions/', );

        return response.data.results;
    } catch (error) {
        // Проверка наличия ошибки и её типа
        if (error.response && error.response.status === 401) {
            // Неправильный логин или пароль
            return {error: "Неправильный"};
        } else {
            // Другие виды ошибок
            return {error: "Произошла ошибка "};
        }
    }
};


export const addCompany = async (data)=>{

    const token = localStorage.getItem('accessToken');
    if (!token) {
        throw new Error('Token not found');
    }

    try {
        const response = await API.post('user/companies/',data,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        } );

        return response.data.results;
    } catch (error) {
        // Проверка наличия ошибки и её типа
        if (error.response && error.response.status === 401) {
            // Неправильный логин или пароль
            return {error: "Неправильный"};
        } else {
            // Другие виды ошибок
            return {error: "Произошла ошибка "};
        }
    }
};

export const mycomp = async ()=>{

    const token = localStorage.getItem('accessToken');
    if (!token) {
        throw new Error('Token not found');
    }

    try {
        const response = await API.get('user/companies/',{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data.results;
    } catch (error) {
        // Проверка наличия ошибки и её типа
        if (error.response && error.response.status === 401) {
            // Неправильный логин или пароль
            return {error: "Неправильный"};
        } else {
        // Другие виды ошибок
        return {error: "Произошла ошибка "};
    }
}
};



export const addbalance = async (data)=>{

    const token = localStorage.getItem('accessToken');
    if (!token) {
        throw new Error('Token not found');
    }

    try {
        const response = await API.post('user/topup',data,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        } );

        return response.data.results;
    } catch (error) {
        // Проверка наличия ошибки и её типа
        if (error.response && error.response.status === 401) {
            // Неправильный логин или пароль
            return {error: "Неправильный"};
        } else {
            // Другие виды ошибок
            return {error: "Произошла ошибка "};
        }
    }
};
