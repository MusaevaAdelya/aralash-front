import API from "../../api";

export const login = async (username, password) => {
    try {
        const response = await API.post('user/token/', {
            "email": username,
            "password": password
        });
        if (response.data.access) {
            localStorage.setItem('accessToken', response.data.access);
            localStorage.setItem('refreshToken', response.data.refresh);
        }
        return response.data;
    } catch (error) {
        // Проверка наличия ошибки и её типа
        if (error.response && error.response.status === 401) {
            // Неправильный логин или пароль
            return {error: "Неправильный логин или пароль"};
        } else {
            // Другие виды ошибок
            return {error: "Произошла ошибка при попытке входа в систему"};
        }
    }
};

export const refreshToken = async () => {

    const response = await API.post('/token/refresh/', {
        refresh: localStorage.getItem('refreshToken') // Или из другого источника
    });
    if (response.data.access) {
        // Обновите токен в localStorage или localStorage
        localStorage.setItem('accessToken', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);
    }
    console.log(response.data)
    return response.data.access;
};



export const resetPassword = async (token, new_password) => {

    try {
        const response = await API.post(`reset-password-confirm/${token}`, {
            "new_password": new_password
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            console.log(error.response)
            if (error.response.status === 403) {
                return {error: "Недостаточно прав"};
            } else if (error.response.status >= 400 && error.response.status < 500) {
                console.log(error.response)
                return {error: "Ошибка запроса"};
            } else {
                return {error: "Ошибка сервера"};
            }
        } else {
            return {error: "Произошла ошибка,повторите попытку позже"};

        }
    }
};