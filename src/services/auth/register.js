import API from "../../api";

export const register = async (username,email, password) => {
    try {
        const response = await API.post('user/register/', {
            "email": email,
            "username": username,
            "password": password,
            "phone": '+996'
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